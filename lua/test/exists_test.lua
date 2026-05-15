-- ProjectName SDK exists test

local sdk = require("nid-correction-portal_sdk")

describe("NidCorrectionPortalSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
