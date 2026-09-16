# NidCorrectionPortal SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NidCorrectionPortalFeatures
  def self.make_feature(name)
    case name
    when "base"
      NidCorrectionPortalBaseFeature.new
    when "ratelimit"
      NidCorrectionPortalRatelimitFeature.new
    when "retry"
      NidCorrectionPortalRetryFeature.new
    when "test"
      NidCorrectionPortalTestFeature.new
    when "timeout"
      NidCorrectionPortalTimeoutFeature.new
    else
      NidCorrectionPortalBaseFeature.new
    end
  end
end
