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
(0, node_test_1.describe)('ApplicationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NID_CORRECTION_PORTAL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NID_CORRECTION_PORTAL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NidCorrectionPortalSDK.test();
        const ent = testsdk.Application();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'application.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "application", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /applications/{id}/approve", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/applications/{id}/approve", "q": { "$action": "approve", "exist": ["id"] }, "r": {}, "s": [{ "lit": "applications" }, { "var": "id" }, { "lit": "approve" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /applications/{id}/reject", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/applications/{id}/reject", "q": { "$action": "reject", "exist": ["id"] }, "r": {}, "s": [{ "lit": "applications" }, { "var": "id" }, { "lit": "reject" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /applications/{id}/rollback", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/applications/{id}/rollback", "q": { "$action": "rollback", "exist": ["id"] }, "r": {}, "s": [{ "lit": "applications" }, { "var": "id" }, { "lit": "rollback" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /applications/{id}/download-pdf", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/applications/{id}/download-pdf", "q": { "$action": "download_pdf", "exist": ["id"] }, "r": {}, "s": [{ "lit": "applications" }, { "var": "id" }, { "lit": "download-pdf" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "application", "name__orig": "application", "Name": "Application", "name_": "application", "name-": "application", "NAME": "APPLICATION", "index$": 0 }, { "active": true, "entity": "application", "key$": "BasicApplicationFlow", "kind": "basic", "name": "BasicApplicationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "application_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "application_ref01", "srcdatavar": "application_ref01_data", "suffix": "_dt0" }, "m": { "id": "application01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_ref01" } }], "index$": 1 }] }, 'Application', { "POST /applications/{id}/approve": { "protocol": "http", "operationId": "approveApplication", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "properties": { "notes": { "type": "string", "description": "Approval notes or comments" } } } } } }, "responses": { "200": { "description": "Application approved successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true }, "message": { "type": "string", "example": "Application approved successfully" }, "data": { "allOf": [{ "type": "object", "properties": { "id": { "description": "Correction request ID", "type": "string", "key$": "id" }, "nid": { "description": "National ID number", "type": "string", "key$": "nid" }, "applicantName": { "description": "Name of the applicant", "type": "string", "key$": "applicantName" }, "status": { "description": "Current status of the request", "enum": ["pending", "approved", "rejected", "processing"], "type": "string", "key$": "status" }, "category": { "description": "Category of correction", "type": "string", "key$": "category" }, "source": { "description": "Source of the request", "type": "string", "key$": "source" }, "submittedAt": { "description": "Submission timestamp", "format": "date-time", "type": "string", "key$": "submittedAt" }, "updatedAt": { "description": "Last update timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" } }, "x-ref": "#/components/schemas/CorrectionRequest", "index$": 0 }, { "type": "object", "properties": { "changes": { "type": "array", "description": "List of field changes", "items": { "type": "object", "properties": { "field": { "type": "string", "description": "Field name" }, "oldValue": { "type": "string", "description": "Current value" }, "newValue": { "type": "string", "description": "Requested new value" } } }, "key$": "changes" }, "notes": { "type": "string", "description": "Additional notes", "default": "none", "key$": "notes" }, "documents": { "type": "array", "description": "Supporting documents", "items": { "type": "object", "properties": { "id": { "type": "string" }, "name": { "type": "string" }, "type": { "type": "string" }, "url": { "type": "string", "format": "uri" } } }, "key$": "documents" }, "history": { "type": "array", "description": "Status change history", "items": { "type": "object", "properties": { "status": { "type": "string" }, "timestamp": { "type": "string", "format": "date-time" }, "user": { "type": "string" }, "notes": { "type": "string" } } }, "key$": "history" } }, "index$": 1 }], "x-ref": "#/components/schemas/CorrectionRequestDetail" } } } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "404": { "description": "Application not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Application ID", "schema": { "type": "string" }, "index$": 0 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } }, "POST /applications/{id}/reject": { "protocol": "http", "operationId": "rejectApplication", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["reason"], "properties": { "reason": { "type": "string", "description": "Reason for rejection" }, "notes": { "type": "string", "description": "Additional notes" } } } } } }, "responses": { "200": { "description": "Application rejected successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true }, "message": { "type": "string", "example": "Application rejected successfully" }, "data": { "allOf": [{ "type": "object", "properties": { "id": { "description": "Correction request ID", "type": "string", "key$": "id" }, "nid": { "description": "National ID number", "type": "string", "key$": "nid" }, "applicantName": { "description": "Name of the applicant", "type": "string", "key$": "applicantName" }, "status": { "description": "Current status of the request", "enum": ["pending", "approved", "rejected", "processing"], "type": "string", "key$": "status" }, "category": { "description": "Category of correction", "type": "string", "key$": "category" }, "source": { "description": "Source of the request", "type": "string", "key$": "source" }, "submittedAt": { "description": "Submission timestamp", "format": "date-time", "type": "string", "key$": "submittedAt" }, "updatedAt": { "description": "Last update timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" } }, "x-ref": "#/components/schemas/CorrectionRequest", "index$": 0 }, { "type": "object", "properties": { "changes": { "type": "array", "description": "List of field changes", "items": { "type": "object", "properties": { "field": { "type": "string", "description": "Field name" }, "oldValue": { "type": "string", "description": "Current value" }, "newValue": { "type": "string", "description": "Requested new value" } } }, "key$": "changes" }, "notes": { "type": "string", "description": "Additional notes", "default": "none", "key$": "notes" }, "documents": { "type": "array", "description": "Supporting documents", "items": { "type": "object", "properties": { "id": { "type": "string" }, "name": { "type": "string" }, "type": { "type": "string" }, "url": { "type": "string", "format": "uri" } } }, "key$": "documents" }, "history": { "type": "array", "description": "Status change history", "items": { "type": "object", "properties": { "status": { "type": "string" }, "timestamp": { "type": "string", "format": "date-time" }, "user": { "type": "string" }, "notes": { "type": "string" } } }, "key$": "history" } }, "index$": 1 }], "x-ref": "#/components/schemas/CorrectionRequestDetail" } } } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "404": { "description": "Application not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Application ID", "schema": { "type": "string" }, "index$": 0 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } }, "POST /applications/{id}/rollback": { "protocol": "http", "operationId": "rollbackApplication", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "properties": { "notes": { "type": "string", "description": "Rollback notes" } } } } } }, "responses": { "200": { "description": "Application rolled back successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true }, "message": { "type": "string", "example": "Application rolled back successfully" }, "data": { "allOf": [{ "type": "object", "properties": { "id": { "description": "Correction request ID", "type": "string", "key$": "id" }, "nid": { "description": "National ID number", "type": "string", "key$": "nid" }, "applicantName": { "description": "Name of the applicant", "type": "string", "key$": "applicantName" }, "status": { "description": "Current status of the request", "enum": ["pending", "approved", "rejected", "processing"], "type": "string", "key$": "status" }, "category": { "description": "Category of correction", "type": "string", "key$": "category" }, "source": { "description": "Source of the request", "type": "string", "key$": "source" }, "submittedAt": { "description": "Submission timestamp", "format": "date-time", "type": "string", "key$": "submittedAt" }, "updatedAt": { "description": "Last update timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" } }, "x-ref": "#/components/schemas/CorrectionRequest", "index$": 0 }, { "type": "object", "properties": { "changes": { "type": "array", "description": "List of field changes", "items": { "type": "object", "properties": { "field": { "type": "string", "description": "Field name" }, "oldValue": { "type": "string", "description": "Current value" }, "newValue": { "type": "string", "description": "Requested new value" } } }, "key$": "changes" }, "notes": { "type": "string", "description": "Additional notes", "default": "none", "key$": "notes" }, "documents": { "type": "array", "description": "Supporting documents", "items": { "type": "object", "properties": { "id": { "type": "string" }, "name": { "type": "string" }, "type": { "type": "string" }, "url": { "type": "string", "format": "uri" } } }, "key$": "documents" }, "history": { "type": "array", "description": "Status change history", "items": { "type": "object", "properties": { "status": { "type": "string" }, "timestamp": { "type": "string", "format": "date-time" }, "user": { "type": "string" }, "notes": { "type": "string" } } }, "key$": "history" } }, "index$": 1 }], "x-ref": "#/components/schemas/CorrectionRequestDetail" } } } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "404": { "description": "Application not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Application ID", "schema": { "type": "string" }, "index$": 0 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } }, "GET /applications/{id}/download-pdf": { "protocol": "http", "operationId": "downloadApplicationPdf", "responses": { "200": { "description": "PDF file", "content": { "application/pdf": { "schema": { "type": "string", "format": "binary" } } } }, "404": { "description": "Application not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Application ID", "schema": { "type": "string" }, "index$": 0 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const application_ref01_ent = client.Application();
        let application_ref01_data = setup.data.new.application['application_ref01'];
        application_ref01_data = (await application_ref01_ent.create(application_ref01_data)).data();
        (0, node_assert_1.default)(null != application_ref01_data.id);
        // LOAD
        const application_ref01_match_dt0 = {};
        application_ref01_match_dt0.id = application_ref01_data.id;
        const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data();
        (0, node_assert_1.default)(application_ref01_data_dt0.id === application_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/application/ApplicationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NidCorrectionPortalSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['application01', 'application02', 'application03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NID_CORRECTION_PORTAL_TEST_APPLICATION_ENTID': idmap,
        'NID_CORRECTION_PORTAL_TEST_LIVE': 'FALSE',
        'NID_CORRECTION_PORTAL_TEST_EXPLAIN': 'FALSE',
        'NID_CORRECTION_PORTAL_APIKEY': '',
    });
    idmap = env['NID_CORRECTION_PORTAL_TEST_APPLICATION_ENTID'];
    const live = 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NID_CORRECTION_PORTAL_TEST_APPLICATION_ENTID'];
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
//# sourceMappingURL=ApplicationEntity.test.js.map