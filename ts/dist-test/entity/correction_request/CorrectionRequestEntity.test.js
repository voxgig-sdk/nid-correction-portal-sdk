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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "applicantName": { "a": true, "h": "Applicant Name", "n": "applicantName", "r": false, "sh": "Name of the applicant", "t": "`$STRING`", "key$": "applicantName", "index$": 0 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Category of correction", "t": "`$STRING`", "key$": "category", "index$": 1 }, "changes": { "a": true, "h": "Changes", "n": "changes", "r": false, "sh": "List of field changes", "t": "`$ARRAY`", "key$": "changes", "index$": 2 }, "documents": { "a": true, "h": "Documents", "n": "documents", "r": false, "sh": "Supporting documents", "t": "`$ARRAY`", "key$": "documents", "index$": 3 }, "history": { "a": true, "h": "History", "n": "history", "r": false, "sh": "Status change history", "t": "`$ARRAY`", "key$": "history", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Correction request ID", "t": "`$STRING`", "key$": "id", "index$": 5 }, "nid": { "a": true, "h": "Nid", "n": "nid", "r": false, "sh": "National ID number", "t": "`$STRING`", "key$": "nid", "index$": 6 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "sh": "Additional notes", "t": "`$STRING`", "key$": "notes", "index$": 7 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "sh": "Source of the request", "t": "`$STRING`", "key$": "source", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Current status of the request", "t": "`$STRING`", "key$": "status", "index$": 9 }, "submittedAt": { "a": true, "fo": "date-time", "h": "Submitted At", "n": "submittedAt", "r": false, "sh": "Submission timestamp", "t": "`$STRING`", "key$": "submittedAt", "index$": 10 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "Last update timestamp", "t": "`$STRING`", "key$": "updatedAt", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "correction_request", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /correction-requests", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "applicant_name", "or": "applicant_name", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "category", "or": "category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "nid", "or": "nid", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "source", "or": "source", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/correction-requests", "q": { "exist": ["applicant_name", "category", "limit", "nid", "page", "source", "status"] }, "r": {}, "s": [{ "lit": "correction-requests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /correction-requests/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/correction-requests/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "correction-requests" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "correction_request", "name__orig": "correction_request", "Name": "CorrectionRequest", "name_": "correction_request", "name-": "correction-request", "NAME": "CORRECTION_REQUEST", "index$": 2 }, { "active": true, "entity": "correction_request", "key$": "BasicCorrectionRequestFlow", "kind": "basic", "name": "BasicCorrectionRequestFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "correction_request_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "correction_request_ref01", "srcdatavar": "correction_request_ref01_data", "suffix": "_dt0" }, "m": { "id": "correction_request01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-correction_request_ref01" } }], "index$": 1 }] }, 'CorrectionRequest', { "GET /correction-requests": { "protocol": "http", "operationId": "searchCorrectionRequests", "responses": { "200": { "description": "List of correction requests", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "example": true, "key$": "success", "type": "boolean" }, "data": { "items": { "properties": { "applicantName": { "description": "Name of the applicant", "type": "string", "key$": "applicantName" }, "category": { "description": "Category of correction", "type": "string", "key$": "category" }, "id": { "description": "Correction request ID", "type": "string", "key$": "id" }, "nid": { "description": "National ID number", "type": "string", "key$": "nid" }, "source": { "description": "Source of the request", "type": "string", "key$": "source" }, "status": { "description": "Current status of the request", "enum": ["pending", "approved", "rejected", "processing"], "type": "string", "key$": "status" }, "submittedAt": { "description": "Submission timestamp", "format": "date-time", "type": "string", "key$": "submittedAt" }, "updatedAt": { "description": "Last update timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" } }, "type": "object", "x-ref": "#/components/schemas/CorrectionRequest", "index$": 0 }, "key$": "data", "type": "array" }, "pagination": { "key$": "pagination", "properties": { "currentPage": { "description": "Current page number", "type": "integer" }, "itemsPerPage": { "description": "Number of items per page", "type": "integer" }, "totalItems": { "description": "Total number of items", "type": "integer" }, "totalPages": { "description": "Total number of pages", "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/Pagination" } } } } } }, "401": { "description": "Unauthorized", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "nid", "in": "query", "description": "National ID number", "schema": { "type": "string" }, "index$": 0 }, { "name": "applicantName", "in": "query", "description": "Name of the applicant", "schema": { "type": "string" }, "index$": 1 }, { "name": "status", "in": "query", "description": "Application status", "schema": { "type": "string", "enum": ["pending", "approved", "rejected", "processing"] }, "index$": 2 }, { "name": "category", "in": "query", "description": "Correction category", "schema": { "type": "string" }, "index$": 3 }, { "name": "source", "in": "query", "description": "Source of the request", "schema": { "type": "string" }, "index$": 4 }, { "name": "page", "in": "query", "description": "Page number for pagination", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 5 }, { "name": "limit", "in": "query", "description": "Number of items per page", "schema": { "type": "integer", "default": 20, "minimum": 1, "maximum": 100 }, "index$": 6 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } }, "GET /correction-requests/{id}": { "protocol": "http", "operationId": "getCorrectionRequestById", "responses": { "200": { "description": "Correction request details", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true }, "data": { "allOf": [{ "type": "object", "properties": { "id": { "description": "Correction request ID", "type": "string", "key$": "id" }, "nid": { "description": "National ID number", "type": "string", "key$": "nid" }, "applicantName": { "description": "Name of the applicant", "type": "string", "key$": "applicantName" }, "status": { "description": "Current status of the request", "enum": ["pending", "approved", "rejected", "processing"], "type": "string", "key$": "status" }, "category": { "description": "Category of correction", "type": "string", "key$": "category" }, "source": { "description": "Source of the request", "type": "string", "key$": "source" }, "submittedAt": { "description": "Submission timestamp", "format": "date-time", "type": "string", "key$": "submittedAt" }, "updatedAt": { "description": "Last update timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" } }, "x-ref": "#/components/schemas/CorrectionRequest", "index$": 0 }, { "type": "object", "properties": { "changes": { "type": "array", "description": "List of field changes", "items": { "type": "object", "properties": { "field": { "type": "string", "description": "Field name" }, "oldValue": { "type": "string", "description": "Current value" }, "newValue": { "type": "string", "description": "Requested new value" } } }, "key$": "changes" }, "notes": { "type": "string", "description": "Additional notes", "default": "none", "key$": "notes" }, "documents": { "type": "array", "description": "Supporting documents", "items": { "type": "object", "properties": { "id": { "type": "string" }, "name": { "type": "string" }, "type": { "type": "string" }, "url": { "type": "string", "format": "uri" } } }, "key$": "documents" }, "history": { "type": "array", "description": "Status change history", "items": { "type": "object", "properties": { "status": { "type": "string" }, "timestamp": { "type": "string", "format": "date-time" }, "user": { "type": "string" }, "notes": { "type": "string" } } }, "key$": "history" } }, "index$": 1 }], "x-ref": "#/components/schemas/CorrectionRequestDetail" } } } } } }, "404": { "description": "Correction request not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Correction request ID", "schema": { "type": "string" }, "index$": 0 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } } });
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