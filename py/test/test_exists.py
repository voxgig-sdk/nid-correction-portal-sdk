# ProjectName SDK exists test

import pytest
from nidcorrectionportal_sdk import NidCorrectionPortalSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NidCorrectionPortalSDK.test(None, None)
        assert testsdk is not None
