# NidCorrectionPortal Python SDK Reference

Complete API reference for the NidCorrectionPortal Python SDK.


## NidCorrectionPortalSDK

### Constructor

```python
from nidcorrectionportal_sdk import NidCorrectionPortalSDK

client = NidCorrectionPortalSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NidCorrectionPortalSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = NidCorrectionPortalSDK.test()
```


### Instance Methods

#### `Application(data=None)`

Create a new `ApplicationEntity` instance. Pass `None` for no initial data.

#### `Authentication(data=None)`

Create a new `AuthenticationEntity` instance. Pass `None` for no initial data.

#### `CorrectionRequest(data=None)`

Create a new `CorrectionRequestEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ApplicationEntity

```python
application = client.Application()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Any` | No |  |
| `message` | `str` | No |  |
| `note` | `str` | No |  |
| `reason` | `str` | Yes |  |
| `success` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Application().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Application().load({"id": "application_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthenticationEntity

```python
authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `str` | No |  |
| `otp` | `str` | Yes |  |
| `password` | `str` | Yes |  |
| `session_id` | `str` | No |  |
| `success` | `bool` | No |  |
| `token` | `str` | No |  |
| `user` | `dict` | No |  |
| `username` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Authentication().create({
    "otp": "example_otp",  # str
    "password": "example_password",  # str
    "username": "example_username",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CorrectionRequestEntity

```python
correction_request = client.CorrectionRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applicant_name` | `str` | No |  |
| `category` | `str` | No |  |
| `data` | `Any` | No |  |
| `id` | `str` | No |  |
| `nid` | `str` | No |  |
| `source` | `str` | No |  |
| `status` | `str` | No |  |
| `submitted_at` | `str` | No |  |
| `success` | `bool` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CorrectionRequest().list()
for correction_request in results:
    print(correction_request)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CorrectionRequest().load({"id": "correction_request_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CorrectionRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = NidCorrectionPortalSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

