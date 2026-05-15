# NidCorrectionPortal SDK utility: feature_add
module NidCorrectionPortalUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
