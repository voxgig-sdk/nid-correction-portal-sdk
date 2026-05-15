# NidCorrectionPortal SDK utility: make_context
require_relative '../core/context'
module NidCorrectionPortalUtilities
  MakeContext = ->(ctxmap, basectx) {
    NidCorrectionPortalContext.new(ctxmap, basectx)
  }
end
