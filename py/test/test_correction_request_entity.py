# CorrectionRequest entity test

import json
import os
import time

import pytest

from nidcorrectionportal_sdk.utility.voxgig_struct import voxgig_struct as vs
from nidcorrectionportal_sdk import NidCorrectionPortalSDK
from nidcorrectionportal_sdk.core import helpers
from nidcorrectionportal_sdk.config import shared_config
from nidcorrectionportal_sdk.feature.base_feature import NidCorrectionPortalBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class _FailHook(NidCorrectionPortalBaseFeature):
    def __init__(self):
        super().__init__()
        self.name = "failhook"
        self.unexpected = 0

    def init(self, ctx, options):
        pass

    def PreSpec(self, ctx):
        raise RuntimeError("correction_request hook failed")

    def PreUnexpected(self, ctx):
        self.unexpected += 1



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestCorrectionRequestEntity:

    def test_should_create_instance(self):
        testsdk = NidCorrectionPortalSDK.test(None, None)
        ent = testsdk.CorrectionRequest(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "correction_request": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = NidCorrectionPortalSDK.test(seed, None)
        seen = list(base.CorrectionRequest(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from nidcorrectionportal_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = NidCorrectionPortalSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.CorrectionRequest(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_report_a_failed_stream(self):
        offline = {"net": {"offline": True}}
        with pytest.raises(Exception, match="offline"):
            list(NidCorrectionPortalSDK.test(offline, None).CorrectionRequest(None).stream("list", None, None))

        quiet = {"ctrl": {"throw": False}}
        list(NidCorrectionPortalSDK.test(offline, None).CorrectionRequest(None).stream("list", None, quiet))

        if "rbac" in (shared_config().get("feature") or {}):
            denied = NidCorrectionPortalSDK.test(
                None, {"feature": {"rbac": {"active": True, "deny": True}}})
            with pytest.raises(Exception) as err:
                list(denied.CorrectionRequest(None).stream("list", None, None))
            assert "rbac_denied" == getattr(err.value, "code", None)

    def test_should_leave_the_callers_ctrl(self):
        explain = {}
        ctrl = {"explain": explain}
        list(NidCorrectionPortalSDK.test(None, None).CorrectionRequest(None).stream("list", None, {"ctrl": ctrl}))
        assert ["explain"] == list(ctrl.keys())
        assert explain is ctrl["explain"] and 0 < len(explain)

    def test_should_fire_pre_unexpected(self):
        hook = _FailHook()
        client = NidCorrectionPortalSDK({"feature": {"test": {"active": True}}, "extend": [hook]})
        with pytest.raises(Exception, match="hook failed"):
            client.CorrectionRequest(None).list(None, None)
        assert 0 < hook.unexpected

        fired = hook.unexpected
        assert client.CorrectionRequest(None).list(None, {"throw": False}) is None
        assert fired < hook.unexpected

    def test_should_validate_each_listed_record(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        opts = {"feature": {"validate": {"active": True, "request": False, "response": True}}}
        listed = NidCorrectionPortalSDK.test({"entity": {"correction_request": {"v1": {}}}}, opts).CorrectionRequest(None).list(None, None)
        assert ["v1"] == [ent.data_get().get("id") for ent in listed]
        with pytest.raises(Exception) as err:
            NidCorrectionPortalSDK.test({"entity": {"correction_request": {"v1": {"applicantName": 1}}}}, opts).CorrectionRequest(None).list(None, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = NidCorrectionPortalSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.CorrectionRequest(None).list({"applicant_name": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _correction_request_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "correction_request." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        client = setup["client"]
        if setup["live"]:
            runner.live_existing(setup, LIVE_STRICT, "correction_request",
                                 lambda: client.CorrectionRequest(None).list({}, None))

        # Bootstrap entity data from existing test data.
        correction_request_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.correction_request")))
        correction_request_ref01_data = None
        if len(correction_request_ref01_data_raw) > 0:
            correction_request_ref01_data = helpers.to_map(correction_request_ref01_data_raw[0][1])

        # LIST
        correction_request_ref01_ent = client.CorrectionRequest(None)
        correction_request_ref01_match = {}

        correction_request_ref01_list_result = correction_request_ref01_ent.list(correction_request_ref01_match, None)
        assert isinstance(correction_request_ref01_list_result, list)

        # LOAD
        correction_request_ref01_match_dt0 = {
            "id": correction_request_ref01_data["id"],
        }
        correction_request_ref01_data_dt0_loaded = correction_request_ref01_ent.load(correction_request_ref01_match_dt0, None)
        correction_request_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(correction_request_ref01_data_dt0_loaded))
        assert correction_request_ref01_data_dt0_load_result is not None
        assert correction_request_ref01_data_dt0_load_result["id"] == correction_request_ref01_data["id"]



def _correction_request_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/correction_request/CorrectionRequestTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NidCorrectionPortalSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["correction_request01", "correction_request02", "correction_request03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID": idmap,
        "NID_CORRECTION_PORTAL_TEST_LIVE": "FALSE",
        "NID_CORRECTION_PORTAL_TEST_EXPLAIN": "FALSE",
        "NID_CORRECTION_PORTAL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NID_CORRECTION_PORTAL_TEST_CORRECTION_REQUEST_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("NID_CORRECTION_PORTAL_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("NID_CORRECTION_PORTAL_APIKEY"),
            },
            extra or {},
        ])
        client = NidCorrectionPortalSDK(helpers.to_map(merged_opts))

    _live = env.get("NID_CORRECTION_PORTAL_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("NID_CORRECTION_PORTAL_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
