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
(0, node_test_1.describe)('AuthenticationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NID_CORRECTION_PORTAL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NID_CORRECTION_PORTAL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NidCorrectionPortalSDK.test();
        const ent = testsdk.Authentication();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NID_CORRECTION_PORTAL_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'authentication.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "User ID", "t": "`$STRING`", "key$": "id", "index$": 0 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$STRING`", "key$": "message", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Full name", "t": "`$STRING`", "key$": "name", "index$": 2 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "sh": "Organization name", "t": "`$STRING`", "key$": "organization", "index$": 3 }, "otp": { "a": true, "h": "Otp", "n": "otp", "r": true, "sh": "6-digit OTP code", "t": "`$STRING`", "key$": "otp", "index$": 4 }, "password": { "a": true, "fo": "password", "h": "Password", "n": "password", "r": true, "sh": "User password", "t": "`$STRING`", "key$": "password", "index$": 5 }, "role": { "a": true, "h": "Role", "n": "role", "r": false, "sh": "User role", "t": "`$STRING`", "key$": "role", "index$": 6 }, "sessionId": { "a": true, "h": "Session Id", "n": "sessionId", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Session identifier for OTP verification", "t": "`$STRING`", "key$": "sessionId", "index$": 7 }, "success": { "a": true, "h": "Success", "n": "success", "r": false, "t": "`$BOOLEAN`", "key$": "success", "index$": 8 }, "username": { "a": true, "h": "Username", "n": "username", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Username or employee ID", "t": "`$STRING`", "key$": "username", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "authentication", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /auth/login", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/login", "q": {}, "r": {}, "s": [{ "lit": "auth" }, { "lit": "login" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /auth/logout", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/logout", "q": {}, "r": {}, "s": [{ "lit": "auth" }, { "lit": "logout" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /auth/verify-otp", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/verify-otp", "q": {}, "r": {}, "s": [{ "lit": "auth" }, { "lit": "verify-otp" }], "t": { "req": "`reqdata`", "res": "`body.user`" }, "index$": 2 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "authentication", "name__orig": "authentication", "Name": "Authentication", "name_": "authentication", "name-": "authentication", "NAME": "AUTHENTICATION", "index$": 1 }, { "active": true, "entity": "authentication", "key$": "BasicAuthenticationFlow", "kind": "basic", "name": "BasicAuthenticationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "authentication_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Authentication', { "POST /auth/login": { "protocol": "http", "operationId": "login", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["username", "password"], "properties": { "username": { "type": "string", "description": "Username or employee ID", "key$": "username" }, "password": { "type": "string", "format": "password", "description": "User password", "key$": "password" } }, "index$": 1 } } } }, "responses": { "200": { "description": "OTP sent successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true, "key$": "success" }, "message": { "type": "string", "example": "OTP sent to your mobile", "key$": "message" }, "sessionId": { "type": "string", "description": "Session identifier for OTP verification", "key$": "sessionId" } }, "index$": 0 } } } }, "401": { "description": "Invalid credentials", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "security": [{ "bearerAuth": [] }], "securitySource": "definition", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } }, "POST /auth/logout": { "protocol": "http", "operationId": "logout", "responses": { "200": { "description": "Logged out successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true, "key$": "success" }, "message": { "type": "string", "example": "Logged out successfully", "key$": "message" } }, "index$": 0 } } } } }, "parameters": [], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } }, "POST /auth/verify-otp": { "protocol": "http", "operationId": "verifyOtp", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sessionId", "otp"], "properties": { "sessionId": { "type": "string", "description": "Session identifier from login response", "key$": "sessionId" }, "otp": { "type": "string", "pattern": "^[0-9]{6}$", "description": "6-digit OTP code", "key$": "otp" } }, "index$": 1 } } } }, "responses": { "200": { "description": "OTP verified successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": true }, "token": { "type": "string", "description": "JWT authentication token" }, "user": { "type": "object", "properties": { "id": { "type": "string", "description": "User ID", "key$": "id" }, "username": { "type": "string", "description": "Username", "key$": "username" }, "name": { "type": "string", "description": "Full name", "key$": "name" }, "role": { "type": "string", "description": "User role", "enum": ["admin", "officer", "supervisor"], "key$": "role" }, "organization": { "type": "string", "description": "Organization name", "example": "Bangladesh Election Commission", "key$": "organization" } }, "x-ref": "#/components/schemas/User", "index$": 0 } } } } } }, "400": { "description": "Invalid OTP", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "security": [{ "bearerAuth": [] }], "securitySource": "definition", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token obtained after successful OTP verification" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const authentication_ref01_ent = client.Authentication();
        let authentication_ref01_data = setup.data.new.authentication['authentication_ref01'];
        authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data();
        (0, node_assert_1.default)(null != authentication_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NidCorrectionPortalSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['authentication01', 'authentication02', 'authentication03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NID_CORRECTION_PORTAL_TEST_AUTHENTICATION_ENTID': idmap,
        'NID_CORRECTION_PORTAL_TEST_LIVE': 'FALSE',
        'NID_CORRECTION_PORTAL_TEST_EXPLAIN': 'FALSE',
        'NID_CORRECTION_PORTAL_APIKEY': '',
    });
    idmap = env['NID_CORRECTION_PORTAL_TEST_AUTHENTICATION_ENTID'];
    const live = 'TRUE' === env.NID_CORRECTION_PORTAL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NID_CORRECTION_PORTAL_TEST_AUTHENTICATION_ENTID'];
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
//# sourceMappingURL=AuthenticationEntity.test.js.map