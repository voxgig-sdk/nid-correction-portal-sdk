

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NidCorrectionPortalSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NID_CORRECTION_PORTAL_TEST_LIVE=TRUE.
  afterEach(liveDelay('NID_CORRECTION_PORTAL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NidCorrectionPortalSDK.test()
    const ent = testsdk.Application()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = NidCorrectionPortalSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Application().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"application","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["notes"],"co":{"id":"POST /applications/{id}/approve","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/applications/{id}/approve","q":{"$action":"approve","exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"applications"},{"var":"id"},{"lit":"approve"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"bf":["notes","reason"],"co":{"id":"POST /applications/{id}/reject","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/applications/{id}/reject","q":{"$action":"reject","exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"applications"},{"var":"id"},{"lit":"reject"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"a":true,"bf":["notes"],"co":{"id":"POST /applications/{id}/rollback","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/applications/{id}/rollback","q":{"$action":"rollback","exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"applications"},{"var":"id"},{"lit":"rollback"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /applications/{id}/download-pdf","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/applications/{id}/download-pdf","q":{"$action":"download_pdf","exist":["id"]},"r":{},"rs":{"binary":true,"kind":"raw","media":"application/pdf"},"s":[{"lit":"applications"},{"var":"id"},{"lit":"download-pdf"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"application","name__orig":"application","Name":"Application","name_":"application","name-":"application","NAME":"APPLICATION","index$":0}, {"active":true,"entity":"application","key$":"BasicApplicationFlow","kind":"basic","name":"BasicApplicationFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"application_ref01"},"m":{},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"application_ref01","srcdatavar":"application_ref01_data","suffix":"_dt0"},"m":{"id":"application01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-application_ref01"}}],"index$":0}]}, 'Application', {"POST /applications/{id}/approve":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"notes":{"type":"string","description":"Approval notes or comments"}}}}}},"parameters":[{"name":"id","in":"path","required":true,"description":"Application ID","schema":{"type":"string"},"index$":0}]},"POST /applications/{id}/reject":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["reason"],"properties":{"reason":{"type":"string","description":"Reason for rejection"},"notes":{"type":"string","description":"Additional notes"}}}}}},"parameters":[{"name":"id","in":"path","required":true,"description":"Application ID","schema":{"type":"string"},"index$":0}]},"POST /applications/{id}/rollback":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"notes":{"type":"string","description":"Rollback notes"}}}}}},"parameters":[{"name":"id","in":"path","required":true,"description":"Application ID","schema":{"type":"string"},"index$":0}]},"GET /applications/{id}/download-pdf":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"description":"Application ID","schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let application_ref01_data = Object.values(setup.data.existing.application)[0] as any

    // LOAD
    const application_ref01_ent = client.Application()
    const application_ref01_match_dt0: any = {}
    application_ref01_match_dt0.id = application_ref01_data.id
    const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data()
    assert(application_ref01_data_dt0.id === application_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/application/ApplicationTestData.json')

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
    ['application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NID_CORRECTION_PORTAL_TEST_APPLICATION_ENTID': idmap,
    'NID_CORRECTION_PORTAL_TEST_LIVE': 'FALSE',
    'NID_CORRECTION_PORTAL_TEST_EXPLAIN': 'FALSE',
    'NID_CORRECTION_PORTAL_APIKEY': '',
  })

  idmap = env['NID_CORRECTION_PORTAL_TEST_APPLICATION_ENTID']

  const live = 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NID_CORRECTION_PORTAL_TEST_APPLICATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NidCorrectionPortalSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.NID_CORRECTION_PORTAL_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
