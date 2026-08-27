-- Typed models for the NidCorrectionPortal SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Application
---@field id? string
---@field notes? string
---@field reason string

---@class ApplicationLoadMatch
---@field id string

---@class ApplicationCreateData
---@field id string
---@field notes? string
---@field reason string

---@class Authentication
---@field id? string
---@field message? string
---@field name? string
---@field organization? string
---@field otp string
---@field password string
---@field role? string
---@field sessionId? string
---@field success? boolean
---@field username string

---@class AuthenticationCreateData
---@field id? string
---@field message? string
---@field name? string
---@field organization? string
---@field otp string
---@field password string
---@field role? string
---@field sessionId? string
---@field success? boolean
---@field username string

---@class CorrectionRequest
---@field applicantName? string
---@field category? string
---@field changes? table
---@field documents? table
---@field history? table
---@field id? string
---@field nid? string
---@field notes? string
---@field source? string
---@field status? string
---@field submittedAt? string
---@field updatedAt? string

---@class CorrectionRequestLoadMatch
---@field id string

---@class CorrectionRequestListMatch
---@field applicantName? string
---@field category? string
---@field changes? table
---@field documents? table
---@field history? table
---@field id? string
---@field nid? string
---@field notes? string
---@field source? string
---@field status? string
---@field submittedAt? string
---@field updatedAt? string

local M = {}

return M
