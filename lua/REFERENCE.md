# NidCorrectionPortal Lua SDK Reference

Complete API reference for the NidCorrectionPortal Lua SDK.


## NidCorrectionPortalSDK

### Constructor

```lua
local sdk = require("nid-correction-portal_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Application(data)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Authentication(data)`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `CorrectionRequest(data)`

Create a new `CorrectionRequest` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ApplicationEntity

```lua
local application = client:Application(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | No |  |
| `message` | `string` | No |  |
| `note` | `string` | No |  |
| `reason` | `string` | Yes |  |
| `success` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Application():create({
  reason = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Application():load({ id = "application_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthenticationEntity

```lua
local authentication = client:Authentication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No |  |
| `otp` | `string` | Yes |  |
| `password` | `string` | Yes |  |
| `session_id` | `string` | No |  |
| `success` | `boolean` | No |  |
| `token` | `string` | No |  |
| `user` | `table` | No |  |
| `username` | `string` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `message` | - |
| `otp` | - |
| `password` | - |
| `session_id` | Yes |
| `success` | - |
| `token` | - |
| `user` | - |
| `username` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Authentication():create({
  otp = --[[ string ]],
  password = --[[ string ]],
  username = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CorrectionRequestEntity

```lua
local correction_request = client:CorrectionRequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applicant_name` | `string` | No |  |
| `category` | `string` | No |  |
| `data` | `any` | No |  |
| `id` | `string` | No |  |
| `nid` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `submitted_at` | `string` | No |  |
| `success` | `boolean` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CorrectionRequest():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CorrectionRequest():load({ id = "correction_request_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CorrectionRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

