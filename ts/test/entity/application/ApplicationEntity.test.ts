

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"application","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /applications/{id}/approve","json":"{\"operationId\":\"approveApplication\",\"parameters\":[{\"description\":\"Application ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notes\":{\"description\":\"Approval notes or comments\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":false},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"allOf\":[{\"properties\":{\"applicantName\":{\"description\":\"Name of the applicant\",\"type\":\"string\"},\"category\":{\"description\":\"Category of correction\",\"type\":\"string\"},\"id\":{\"description\":\"Correction request ID\",\"type\":\"string\"},\"nid\":{\"description\":\"National ID number\",\"type\":\"string\"},\"source\":{\"description\":\"Source of the request\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the request\",\"enum\":[\"pending\",\"approved\",\"rejected\",\"processing\"],\"type\":\"string\"},\"submittedAt\":{\"description\":\"Submission timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"changes\":{\"description\":\"List of field changes\",\"items\":{\"properties\":{\"field\":{\"description\":\"Field name\",\"type\":\"string\"},\"newValue\":{\"description\":\"Requested new value\",\"type\":\"string\"},\"oldValue\":{\"description\":\"Current value\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"documents\":{\"description\":\"Supporting documents\",\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"history\":{\"description\":\"Status change history\",\"items\":{\"properties\":{\"notes\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"notes\":{\"default\":\"none\",\"description\":\"Additional notes\",\"type\":\"string\"}},\"type\":\"object\"}]},\"message\":{\"example\":\"Application approved successfully\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application approved successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained after successful OTP verification\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/applications/{id}/approve","segments":[{"lit":"applications"},{"var":"id"},{"lit":"approve"}],"select":{"$action":"approve","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /applications/{id}/reject","json":"{\"operationId\":\"rejectApplication\",\"parameters\":[{\"description\":\"Application ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notes\":{\"description\":\"Additional notes\",\"type\":\"string\"},\"reason\":{\"description\":\"Reason for rejection\",\"type\":\"string\"}},\"required\":[\"reason\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"allOf\":[{\"properties\":{\"applicantName\":{\"description\":\"Name of the applicant\",\"type\":\"string\"},\"category\":{\"description\":\"Category of correction\",\"type\":\"string\"},\"id\":{\"description\":\"Correction request ID\",\"type\":\"string\"},\"nid\":{\"description\":\"National ID number\",\"type\":\"string\"},\"source\":{\"description\":\"Source of the request\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the request\",\"enum\":[\"pending\",\"approved\",\"rejected\",\"processing\"],\"type\":\"string\"},\"submittedAt\":{\"description\":\"Submission timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"changes\":{\"description\":\"List of field changes\",\"items\":{\"properties\":{\"field\":{\"description\":\"Field name\",\"type\":\"string\"},\"newValue\":{\"description\":\"Requested new value\",\"type\":\"string\"},\"oldValue\":{\"description\":\"Current value\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"documents\":{\"description\":\"Supporting documents\",\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"history\":{\"description\":\"Status change history\",\"items\":{\"properties\":{\"notes\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"notes\":{\"default\":\"none\",\"description\":\"Additional notes\",\"type\":\"string\"}},\"type\":\"object\"}]},\"message\":{\"example\":\"Application rejected successfully\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application rejected successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained after successful OTP verification\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/applications/{id}/reject","segments":[{"lit":"applications"},{"var":"id"},{"lit":"reject"}],"select":{"$action":"reject","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /applications/{id}/rollback","json":"{\"operationId\":\"rollbackApplication\",\"parameters\":[{\"description\":\"Application ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notes\":{\"description\":\"Rollback notes\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":false},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"allOf\":[{\"properties\":{\"applicantName\":{\"description\":\"Name of the applicant\",\"type\":\"string\"},\"category\":{\"description\":\"Category of correction\",\"type\":\"string\"},\"id\":{\"description\":\"Correction request ID\",\"type\":\"string\"},\"nid\":{\"description\":\"National ID number\",\"type\":\"string\"},\"source\":{\"description\":\"Source of the request\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the request\",\"enum\":[\"pending\",\"approved\",\"rejected\",\"processing\"],\"type\":\"string\"},\"submittedAt\":{\"description\":\"Submission timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"changes\":{\"description\":\"List of field changes\",\"items\":{\"properties\":{\"field\":{\"description\":\"Field name\",\"type\":\"string\"},\"newValue\":{\"description\":\"Requested new value\",\"type\":\"string\"},\"oldValue\":{\"description\":\"Current value\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"documents\":{\"description\":\"Supporting documents\",\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"history\":{\"description\":\"Status change history\",\"items\":{\"properties\":{\"notes\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"notes\":{\"default\":\"none\",\"description\":\"Additional notes\",\"type\":\"string\"}},\"type\":\"object\"}]},\"message\":{\"example\":\"Application rolled back successfully\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application rolled back successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained after successful OTP verification\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/applications/{id}/rollback","segments":[{"lit":"applications"},{"var":"id"},{"lit":"rollback"}],"select":{"$action":"rollback","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /applications/{id}/download-pdf","json":"{\"operationId\":\"downloadApplicationPdf\",\"parameters\":[{\"description\":\"Application ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/pdf\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"PDF file\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Application not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained after successful OTP verification\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/applications/{id}/download-pdf","segments":[{"lit":"applications"},{"var":"id"},{"lit":"download-pdf"}],"select":{"$action":"download_pdf","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"application","name__orig":"application","Name":"Application","name_":"application","name-":"application","NAME":"APPLICATION","index$":0}, {"active":true,"entity":"application","key$":"BasicApplicationFlow","kind":"basic","name":"BasicApplicationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"application_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"application_ref01","srcdatavar":"application_ref01_data","suffix":"_dt0"},"match":{"id":"application01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-application_ref01"}}],"index$":1}]}, 'Application')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const application_ref01_ent = client.Application()
    let application_ref01_data = setup.data.new.application['application_ref01']

    application_ref01_data = (await application_ref01_ent.create(application_ref01_data)).data()
    assert(null != application_ref01_data.id)


    // LOAD
    const application_ref01_match_dt0: any = {}
    application_ref01_match_dt0.id = application_ref01_data.id
    const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data()
    assert(application_ref01_data_dt0.id === application_ref01_data.id)


  })
})



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
  
