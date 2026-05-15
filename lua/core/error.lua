-- NidCorrectionPortal SDK error

local NidCorrectionPortalError = {}
NidCorrectionPortalError.__index = NidCorrectionPortalError


function NidCorrectionPortalError.new(code, msg, ctx)
  local self = setmetatable({}, NidCorrectionPortalError)
  self.is_sdk_error = true
  self.sdk = "NidCorrectionPortal"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NidCorrectionPortalError:error()
  return self.msg
end


function NidCorrectionPortalError:__tostring()
  return self.msg
end


return NidCorrectionPortalError
