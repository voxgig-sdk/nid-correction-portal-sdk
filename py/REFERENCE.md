# NidCorrectionPortal Python SDK Reference

Complete API reference for the NidCorrectionPortal Python SDK.


## NidCorrectionPortalSDK

### Constructor

```python
from nid-correction-portal_sdk import NidCorrectionPortalSDK

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.application.create({
    "reason": # `$STRING`,
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.application.load({"id": "application_id"})
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.authentication.create({
    "otp": # `$STRING`,
    "password": # `$STRING`,
    "username": # `$STRING`,
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.correction_request.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.correction_request.load({"id": "correction_request_id"})
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

