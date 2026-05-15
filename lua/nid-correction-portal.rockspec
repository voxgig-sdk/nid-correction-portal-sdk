package = "voxgig-sdk-nid-correction-portal"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/nid-correction-portal-sdk.git"
}
description = {
  summary = "NidCorrectionPortal SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
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
