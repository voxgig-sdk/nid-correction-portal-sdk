# NidCorrectionPortal SDK feature factory

from nidcorrectionportal_sdk.feature.base_feature import NidCorrectionPortalBaseFeature
from nidcorrectionportal_sdk.feature.test_feature import NidCorrectionPortalTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NidCorrectionPortalBaseFeature(),
        "test": lambda: NidCorrectionPortalTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
