"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CorrectionRequestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NID_CORRECTION_PORTAL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NID_CORRECTION_PORTAL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NidCorrectionPortalSDK.test();
        const ent = testsdk.CorrectionRequest();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'correction_request.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "applicantName", "req": false, "short": "Name of the applicant", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "category", "req": false, "short": "Category of correction", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "changes", "req": false, "short": "List of field changes", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "documents", "req": false, "short": "Supporting documents", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "history", "req": false, "short": "Status change history", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "id", "req": false, "short": "Correction request ID", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "nid", "req": false, "short": "National ID number", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "notes", "req": false, "short": "Additional notes", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "source", "req": false, "short": "Source of the request", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "status", "req": false, "short": "Current status of the request", "type": "`$STRING`", "index$": 9 }, { "active": true, "format": "date-time", "name": "submittedAt", "req": false, "short": "Submission timestamp", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": false, "short": "Last update timestamp", "type": "`$STRING`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "correction_request", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "applicant_name", "orig": "applicant_name", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "category", "orig": "category", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": 20, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "nid", "orig": "nid", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "source", "orig": "source", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /correction-requests", "json": "{\"operationId\":\"searchCorrectionRequests\",\"parameters\":[{\"description\":\"National ID number\",\"in\":\"query\",\"name\":\"nid\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Name of the applicant\",\"in\":\"query\",\"name\":\"applicantName\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Application status\",\"in\":\"query\",\"name\":\"status\",\"schema\":{\"enum\":[\"pending\",\"approved\",\"rejected\",\"processing\"],\"type\":\"string\"}},{\"description\":\"Correction category\",\"in\":\"query\",\"name\":\"category\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Source of the request\",\"in\":\"query\",\"name\":\"source\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of items per page\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"applicantName\":{\"description\":\"Name of the applicant\",\"type\":\"string\"},\"category\":{\"description\":\"Category of correction\",\"type\":\"string\"},\"id\":{\"description\":\"Correction request ID\",\"type\":\"string\"},\"nid\":{\"description\":\"National ID number\",\"type\":\"string\"},\"source\":{\"description\":\"Source of the request\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the request\",\"enum\":[\"pending\",\"approved\",\"rejected\",\"processing\"],\"type\":\"string\"},\"submittedAt\":{\"description\":\"Submission timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"currentPage\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"itemsPerPage\":{\"description\":\"Number of items per page\",\"type\":\"integer\"},\"totalItems\":{\"description\":\"Total number of items\",\"type\":\"integer\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"List of correction requests\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained after successful OTP verification\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/correction-requests", "segments": [{ "lit": "correction-requests" }], "select": { "exist": ["applicant_name", "category", "limit", "nid", "page", "source", "status"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /correction-requests/{id}", "json": "{\"operationId\":\"getCorrectionRequestById\",\"parameters\":[{\"description\":\"Correction request ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"allOf\":[{\"properties\":{\"applicantName\":{\"description\":\"Name of the applicant\",\"type\":\"string\"},\"category\":{\"description\":\"Category of correction\",\"type\":\"string\"},\"id\":{\"description\":\"Correction request ID\",\"type\":\"string\"},\"nid\":{\"description\":\"National ID number\",\"type\":\"string\"},\"source\":{\"description\":\"Source of the request\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the request\",\"enum\":[\"pending\",\"approved\",\"rejected\",\"processing\"],\"type\":\"string\"},\"submittedAt\":{\"description\":\"Submission timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"changes\":{\"description\":\"List of field changes\",\"items\":{\"properties\":{\"field\":{\"description\":\"Field name\",\"type\":\"string\"},\"newValue\":{\"description\":\"Requested new value\",\"type\":\"string\"},\"oldValue\":{\"description\":\"Current value\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"documents\":{\"description\":\"Supporting documents\",\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"history\":{\"description\":\"Status change history\",\"items\":{\"properties\":{\"notes\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"notes\":{\"default\":\"none\",\"description\":\"Additional notes\",\"type\":\"string\"}},\"type\":\"object\"}]},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Correction request details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Correction request not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained after successful OTP verification\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/correction-requests/{id}", "segments": [{ "lit": "correction-requests" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "correction_request", "name__orig": "correction_request", "Name": "CorrectionRequest", "name_": "correction_request", "name-": "correction-request", "NAME": "CORRECTION_REQUEST", "index$": 2 }, { "active": true, "entity": "correction_request", "key$": "BasicCorrectionRequestFlow", "kind": "basic", "name": "BasicCorrectionRequestFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "correction_request_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "correction_request_ref01", "srcdatavar": "correction_request_ref01_data", "suffix": "_dt0" }, "match": { "id": "correction_request01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-correction_request_ref01" } }], "index$": 1 }] }, 'CorrectionRequest');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let correction_request_ref01_data = Object.values(setup.data.existing.correction_request)[0];
        // LIST
        const correction_request_ref01_ent = client.CorrectionRequest();
        const correction_request_ref01_match = {};
        const correction_request_ref01_list = (await correction_request_ref01_ent.list(correction_request_ref01_match)).map((e) => e.data());
        // LOAD
        const correction_request_ref01_match_dt0 = {};
        correction_request_ref01_match_dt0.id = correction_request_ref01_data.id;
        const correction_request_ref01_data_dt0 = (await correction_request_ref01_ent.load(correction_request_ref01_match_dt0)).data();
        (0, node_assert_1.default)(correction_request_ref01_data_dt0.id === correction_request_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/correction_request/CorrectionRequestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NidCorrectionPortalSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['correction_request01', 'correction_request02', 'correction_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID': idmap,
        'NID_CORRECTION_PORTAL_TEST_LIVE': 'FALSE',
        'NID_CORRECTION_PORTAL_TEST_EXPLAIN': 'FALSE',
        'NID_CORRECTION_PORTAL_APIKEY': '',
    });
    idmap = env['NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID'];
    const live = 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NidCorrectionPortalSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=CorrectionRequestEntity.test.js.map