# NidCorrectionPortal SDK utility: prepare_body
require_relative 'media'
module NidCorrectionPortalUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return NidCorrectionPortalUtilities.raw_body(ctx.reqdata) if NidCorrectionPortalUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
