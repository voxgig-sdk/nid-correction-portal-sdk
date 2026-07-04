-- Typed models for the NidCorrectionPortal SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Application
---@field data? any
---@field message? string
---@field note? string
---@field reason string
---@field success? boolean

---@class ApplicationLoadMatch
---@field id string

---@class ApplicationCreateData
---@field id string

---@class Authentication
---@field message? string
---@field otp string
---@field password string
---@field session_id? string
---@field success? boolean
---@field token? string
---@field user? table
---@field username string

---@class AuthenticationCreateData

---@class CorrectionRequest
---@field applicant_name? string
---@field category? string
---@field data? any
---@field id? string
---@field nid? string
---@field source? string
---@field status? string
---@field submitted_at? string
---@field success? boolean
---@field updated_at? string

---@class CorrectionRequestLoadMatch
---@field id string

---@class CorrectionRequestListMatch

local M = {}

return M
