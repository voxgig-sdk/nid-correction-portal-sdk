# NidCorrectionPortal Golang SDK Reference

Complete API reference for the NidCorrectionPortal Golang SDK.


## NidCorrectionPortalSDK

### Constructor

```go
func NewNidCorrectionPortalSDK(options map[string]any) *NidCorrectionPortalSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *NidCorrectionPortalSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *NidCorrectionPortalSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Application(data map[string]any) NidCorrectionPortalEntity`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Authentication(data map[string]any) NidCorrectionPortalEntity`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `CorrectionRequest(data map[string]any) NidCorrectionPortalEntity`

Create a new `CorrectionRequest` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ApplicationEntity

```go
application := client.Application(nil)
fmt.Println(application.GetName()) // "application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `string` | No | Approval notes or comments |
| `reason` | `string` | Yes | Reason for rejection |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Application(nil).Load(map[string]any{"id": "application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Application(nil).Create(map[string]any{
    "id": "example_id",
    "reason": "example_reason",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthenticationEntity

```go
authentication := client.Authentication(nil)
fmt.Println(authentication.GetName()) // "authentication"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | User ID |
| `message` | `string` | No |  |
| `name` | `string` | No | Full name |
| `organization` | `string` | No | Organization name |
| `otp` | `string` | Yes | 6-digit OTP code |
| `password` | `string` | Yes | User password |
| `role` | `string` | No | User role |
| `sessionId` | `string` | No | Session identifier for OTP verification |
| `success` | `bool` | No |  |
| `username` | `string` | Yes | Username or employee ID |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `id` | - |
| `message` | - |
| `name` | - |
| `organization` | - |
| `otp` | - |
| `password` | - |
| `role` | - |
| `sessionId` | Yes |
| `success` | - |
| `username` | Yes |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Authentication(nil).Create(map[string]any{
    "otp": "example_otp",
    "password": "example_password",
    "username": "example_username",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CorrectionRequestEntity

```go
correctionRequest := client.CorrectionRequest(nil)
fmt.Println(correctionRequest.GetName()) // "correction_request"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applicantName` | `string` | No | Name of the applicant |
| `category` | `string` | No | Category of correction |
| `changes` | `[]any` | No | List of field changes |
| `documents` | `[]any` | No | Supporting documents |
| `history` | `[]any` | No | Status change history |
| `id` | `string` | No | Correction request ID |
| `nid` | `string` | No | National ID number |
| `notes` | `string` | No | Additional notes |
| `source` | `string` | No | Source of the request |
| `status` | `string` | No | Current status of the request |
| `submittedAt` | `string` | No | Submission timestamp |
| `updatedAt` | `string` | No | Last update timestamp |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CorrectionRequest(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CorrectionRequest(nil).Load(map[string]any{"id": "correction_request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CorrectionRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewNidCorrectionPortalSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

