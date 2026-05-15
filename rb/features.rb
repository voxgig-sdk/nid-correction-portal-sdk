# NidCorrectionPortal SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NidCorrectionPortalFeatures
  def self.make_feature(name)
    case name
    when "base"
      NidCorrectionPortalBaseFeature.new
    when "test"
      NidCorrectionPortalTestFeature.new
    else
      NidCorrectionPortalBaseFeature.new
    end
  end
end
