# NidCorrectionPortal Ruby SDK Reference

Complete API reference for the NidCorrectionPortal Ruby SDK.


## NidCorrectionPortalSDK

### Constructor

```ruby
require_relative 'NidCorrectionPortal_sdk'

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
application = client.Application
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Object` | No |  |
| `message` | `String` | No |  |
| `note` | `String` | No |  |
| `reason` | `String` | Yes |  |
| `success` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Application.create({
  "reason" => "example", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Application.load({ "id" => "application_id" })
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
authentication = client.Authentication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `String` | No |  |
| `otp` | `String` | Yes |  |
| `password` | `String` | Yes |  |
| `session_id` | `String` | No |  |
| `success` | `Boolean` | No |  |
| `token` | `String` | No |  |
| `user` | `Hash` | No |  |
| `username` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Authentication.create({
  "otp" => "example", # String
  "password" => "example", # String
  "username" => "example", # String
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
correction_request = client.CorrectionRequest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applicant_name` | `String` | No |  |
| `category` | `String` | No |  |
| `data` | `Object` | No |  |
| `id` | `String` | No |  |
| `nid` | `String` | No |  |
| `source` | `String` | No |  |
| `status` | `String` | No |  |
| `submitted_at` | `String` | No |  |
| `success` | `Boolean` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CorrectionRequest.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CorrectionRequest.load({ "id" => "correction_request_id" })
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

