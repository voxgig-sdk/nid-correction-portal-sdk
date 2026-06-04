
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { NidCorrectionPortalSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('CorrectionRequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NIDCORRECTIONPORTAL_TEST_LIVE=TRUE.
  afterEach(liveDelay('NIDCORRECTIONPORTAL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NidCorrectionPortalSDK.test()
    const ent = testsdk.CorrectionRequest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'correction_request.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let correction_request_ref01_data = Object.values(setup.data.existing.correction_request)[0] as any

    // LIST
    const correction_request_ref01_ent = client.CorrectionRequest()
    const correction_request_ref01_match: any = {}

    const correction_request_ref01_list = await correction_request_ref01_ent.list(correction_request_ref01_match)


    // LOAD
    const correction_request_ref01_match_dt0: any = {}
    correction_request_ref01_match_dt0.id = correction_request_ref01_data.id
    const correction_request_ref01_data_dt0 = await correction_request_ref01_ent.load(correction_request_ref01_match_dt0)
    assert(correction_request_ref01_data_dt0.id === correction_request_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/correction_request/CorrectionRequestTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NidCorrectionPortalSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['correction_request01','correction_request02','correction_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID': idmap,
    'NID_CORRECTION_PORTAL_TEST_LIVE': 'FALSE',
    'NID_CORRECTION_PORTAL_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID']

  const live = 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_LIVE

  if (live) {
    client = new NidCorrectionPortalSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
