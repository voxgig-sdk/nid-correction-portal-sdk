# NidCorrectionPortal SDK utility: make_context

from core.context import NidCorrectionPortalContext


def make_context_util(ctxmap, basectx):
    return NidCorrectionPortalContext(ctxmap, basectx)
