# NidCorrectionPortal SDK

Manage Bangladesh Election Commission National ID correction requests, with login, search, review, and approval/rejection workflows

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About NID Correction Portal

The NID Correction Portal API backs an internal-style workflow for the Bangladesh Election Commission, exposing operations used by officials to process citizen requests to correct details on their National ID (NID) records.

What the SDK surfaces, based on the published catalogue entry:

- Official login / authentication for portal users
- Searching and listing of correction requests
- Viewing the details of a specific correction request or application
- Approving or rejecting submitted applications
- Tracking the status of in-flight requests

The service is hosted on Vercel at `https://cms-card-management-system-nid-cms-steel.vercel.app/api`. Community monitoring on freepublicapis.com reports CORS disabled and a low recent reliability score, so treat this as a workflow / back-office API rather than a stable public dataset, and expect transient errors.

## Try it

**TypeScript**
```bash
npm install nid-correction-portal
```

**Python**
```bash
pip install nid-correction-portal-sdk
```

**PHP**
```bash
composer require voxgig/nid-correction-portal-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/nid-correction-portal-sdk/go
```

**Ruby**
```bash
gem install nid-correction-portal-sdk
```

**Lua**
```bash
luarocks install nid-correction-portal-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NidCorrectionPortalSDK } from 'nid-correction-portal'

const client = new NidCorrectionPortalSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o nid-correction-portal-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "nid-correction-portal": {
      "command": "/abs/path/to/nid-correction-portal-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Application** | An NID correction application submitted by a citizen, with operations for officials to view details and approve or reject the request. | `/applications/{id}/approve` |
| **Authentication** | Login and session handling for authorised Election Commission officials accessing the correction portal. | `/auth/login` |
| **CorrectionRequest** | A pending or processed request to amend information on a Bangladesh National ID record, supporting search, detail retrieval, and status tracking. | `/correction-requests` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from nidcorrectionportal_sdk import NidCorrectionPortalSDK

client = NidCorrectionPortalSDK({})


# Load a specific application
application, err = client.Application(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'nidcorrectionportal_sdk.php';

$client = new NidCorrectionPortalSDK([]);


// Load a specific application
[$application, $err] = $client->Application(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/nid-correction-portal-sdk/go"

client := sdk.NewNidCorrectionPortalSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "NidCorrectionPortal_sdk"

client = NidCorrectionPortalSDK.new({})


# Load a specific application
application, err = client.Application(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("nid-correction-portal_sdk")

local client = sdk.new({})


-- Load a specific application
local application, err = client:Application(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NidCorrectionPortalSDK.test()
const result = await client.Application().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NidCorrectionPortalSDK.test(None, None)
result, err = client.Application(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NidCorrectionPortalSDK::test(null, null);
[$result, $err] = $client->Application(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Application(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NidCorrectionPortalSDK.test(nil, nil)
result, err = client.Application(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Application(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the NID Correction Portal

- Upstream: [https://cms-card-management-system-nid-cms-steel.vercel.app/api](https://cms-card-management-system-nid-cms-steel.vercel.app/api)

- No licence is published alongside the API.
- The service appears to target authorised Bangladesh Election Commission officials, so unrestricted public use should not be assumed.
- Confirm permitted use directly with the operator before integrating.

---

Generated from the NID Correction Portal OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
