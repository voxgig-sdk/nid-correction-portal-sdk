# NidCorrectionPortal SDK exists test

require "minitest/autorun"
require_relative "../NidCorrectionPortal_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NidCorrectionPortalSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
