# NidCorrectionPortal TypeScript SDK Reference

Complete API reference for the NidCorrectionPortal TypeScript SDK.


## NidCorrectionPortalSDK

### Constructor

```ts
new NidCorrectionPortalSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NidCorrectionPortalSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = NidCorrectionPortalSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `NidCorrectionPortalSDK` instance in test mode.


### Instance Methods

#### `Application(data?: object)`

Create a new `Application` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationEntity` instance.

#### `Authentication(data?: object)`

Create a new `Authentication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationEntity` instance.

#### `CorrectionRequest(data?: object)`

Create a new `CorrectionRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CorrectionRequestEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `NidCorrectionPortalSDK.test()`.

**Returns:** `NidCorrectionPortalSDK` instance in test mode.


---

## ApplicationEntity

```ts
const application = client.application
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ANY`` | No |  |
| `message` | ``$STRING`` | No |  |
| `note` | ``$STRING`` | No |  |
| `reason` | ``$STRING`` | Yes |  |
| `success` | ``$BOOLEAN`` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.application.create({
  reason: /* `$STRING` */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.application.load({ id: 'application_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NidCorrectionPortalSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationEntity

```ts
const authentication = client.authentication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$STRING`` | No |  |
| `otp` | ``$STRING`` | Yes |  |
| `password` | ``$STRING`` | Yes |  |
| `session_id` | ``$STRING`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |
| `token` | ``$STRING`` | No |  |
| `user` | ``$OBJECT`` | No |  |
| `username` | ``$STRING`` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `message` | - | - | - | - | - |
| `otp` | - | - | - | - | - |
| `password` | - | - | - | - | - |
| `session_id` | - | - | Yes | - | - |
| `success` | - | - | - | - | - |
| `token` | - | - | - | - | - |
| `user` | - | - | - | - | - |
| `username` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.authentication.create({
  otp: /* `$STRING` */,
  password: /* `$STRING` */,
  username: /* `$STRING` */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NidCorrectionPortalSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CorrectionRequestEntity

```ts
const correction_request = client.correction_request
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applicant_name` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `data` | ``$ANY`` | No |  |
| `id` | ``$STRING`` | No |  |
| `nid` | ``$STRING`` | No |  |
| `source` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |
| `submitted_at` | ``$STRING`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |
| `updated_at` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.correction_request.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.correction_request.load({ id: 'correction_request_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CorrectionRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `NidCorrectionPortalSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new NidCorrectionPortalSDK({
  feature: {
    test: { active: true },
  }
})
```

