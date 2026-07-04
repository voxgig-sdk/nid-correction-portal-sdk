# NidCorrectionPortal Ruby SDK Reference

Complete API reference for the NidCorrectionPortal Ruby SDK.


## NidCorrectionPortalSDK

### Constructor

```ruby
require_relative 'nid-correction-portal_sdk'

client = NidCorrectionPortalSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NidCorrectionPortalSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = NidCorrectionPortalSDK.test
```


### Instance Methods

#### `Application(data = nil)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Authentication(data = nil)`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `CorrectionRequest(data = nil)`

Create a new `CorrectionRequest` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ApplicationEntity

```ruby
application = client.application
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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.application.create({
  "reason" => # `$STRING`,
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.application.load({ "id" => "application_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthenticationEntity

```ruby
authentication = client.authentication
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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.authentication.create({
  "otp" => # `$STRING`,
  "password" => # `$STRING`,
  "username" => # `$STRING`,
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CorrectionRequestEntity

```ruby
correction_request = client.correction_request
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.correction_request.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.correction_request.load({ "id" => "correction_request_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CorrectionRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = NidCorrectionPortalSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

