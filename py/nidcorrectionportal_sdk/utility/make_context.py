# NidCorrectionPortal SDK utility: make_context

from nidcorrectionportal_sdk.core.context import NidCorrectionPortalContext


def make_context_util(ctxmap, basectx):
    return NidCorrectionPortalContext(ctxmap, basectx)
