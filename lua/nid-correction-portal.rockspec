package = "voxgig-sdk-nid-correction-portal"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/nid-correction-portal-sdk.git",
  tag = "lua/v0.0.1",
  dir = "nid-correction-portal-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the NID Correction Portal public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/nid-correction-portal-sdk",
  issues_url = "https://github.com/voxgig-sdk/nid-correction-portal-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "nid-correction-portal" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["nid-correction-portal_sdk"] = "nid-correction-portal_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
