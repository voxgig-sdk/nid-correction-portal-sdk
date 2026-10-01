

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NidCorrectionPortalSDK, BaseFeature, stdutil } from '../../..'

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


describe('AuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NID_CORRECTION_PORTAL_TEST_LIVE=TRUE.
  afterEach(liveDelay('NID_CORRECTION_PORTAL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NidCorrectionPortalSDK.test()
    const ent = testsdk.Authentication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":0},"otp":{"a":true,"h":"Otp","n":"otp","r":true,"sh":"6-digit OTP code","t":"`$STRING`","key$":"otp","index$":1},"password":{"a":true,"fo":"password","h":"Password","n":"password","r":true,"sh":"User password","t":"`$STRING`","key$":"password","index$":2},"sessionId":{"a":true,"h":"Session Id","n":"sessionId","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Session identifier for OTP verification","t":"`$STRING`","key$":"sessionId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":4},"token":{"a":true,"h":"Token","n":"token","r":false,"sh":"JWT authentication token","t":"`$STRING`","key$":"token","index$":5},"user":{"a":true,"h":"User","n":"user","r":false,"t":"`$OBJECT`","key$":"user","index$":6},"username":{"a":true,"h":"Username","n":"username","r":true,"sh":"Username or employee ID","t":"`$STRING`","key$":"username","index$":7}},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /auth/login","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/login","q":{},"r":{},"s":[{"lit":"auth"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /auth/logout","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/logout","q":{},"r":{},"s":[{"lit":"auth"},{"lit":"logout"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /auth/verify-otp","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/verify-otp","q":{},"r":{},"s":[{"lit":"auth"},{"lit":"verify-otp"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":1}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Authentication', {"POST /auth/login":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","description":"Username or employee ID","key$":"username"},"password":{"type":"string","format":"password","description":"User password","key$":"password"}},"index$":1}}}},"parameters":[]},"POST /auth/logout":{"protocol":"http","parameters":[]},"POST /auth/verify-otp":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["sessionId","otp"],"properties":{"sessionId":{"type":"string","description":"Session identifier from login response","key$":"sessionId"},"otp":{"type":"string","pattern":"^[0-9]{6}$","description":"6-digit OTP code","key$":"otp"}},"index$":1}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_ref01_ent = client.Authentication()
    let authentication_ref01_data = setup.data.new.authentication['authentication_ref01']

    authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data()
    assert(null != authentication_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json')

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
    ['authentication01','authentication02','authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NID_CORRECTION_PORTAL_TEST_AUTHENTICATION_ENTID': idmap,
    'NID_CORRECTION_PORTAL_TEST_LIVE': 'FALSE',
    'NID_CORRECTION_PORTAL_TEST_EXPLAIN': 'FALSE',
    'NID_CORRECTION_PORTAL_APIKEY': '',
  })

  idmap = env['NID_CORRECTION_PORTAL_TEST_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NID_CORRECTION_PORTAL_TEST_AUTHENTICATION_ENTID']
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
  
