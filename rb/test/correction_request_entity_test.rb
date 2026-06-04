# CorrectionRequest entity test

require "minitest/autorun"
require "json"
require_relative "../NidCorrectionPortal_sdk"
require_relative "runner"

class CorrectionRequestEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NidCorrectionPortalSDK.test(nil, nil)
    ent = testsdk.CorrectionRequest(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = correction_request_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "correction_request." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    correction_request_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.correction_request")))
    correction_request_ref01_data = nil
    if correction_request_ref01_data_raw.length > 0
      correction_request_ref01_data = Helpers.to_map(correction_request_ref01_data_raw[0][1])
    end

    # LIST
    correction_request_ref01_ent = client.CorrectionRequest(nil)
    correction_request_ref01_match = {}

    correction_request_ref01_list_result, err = correction_request_ref01_ent.list(correction_request_ref01_match, nil)
    assert_nil err
    assert correction_request_ref01_list_result.is_a?(Array)

    # LOAD
    correction_request_ref01_match_dt0 = {
      "id" => correction_request_ref01_data["id"],
    }
    correction_request_ref01_data_dt0_loaded, err = correction_request_ref01_ent.load(correction_request_ref01_match_dt0, nil)
    assert_nil err
    correction_request_ref01_data_dt0_load_result = Helpers.to_map(correction_request_ref01_data_dt0_loaded)
    assert !correction_request_ref01_data_dt0_load_result.nil?
    assert_equal correction_request_ref01_data_dt0_load_result["id"], correction_request_ref01_data["id"]

  end
end

def correction_request_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "correction_request", "CorrectionRequestTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NidCorrectionPortalSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["correction_request01", "correction_request02", "correction_request03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID" => idmap,
    "NIDCORRECTIONPORTAL_TEST_LIVE" => "FALSE",
    "NIDCORRECTIONPORTAL_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["NIDCORRECTIONPORTAL_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = NidCorrectionPortalSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["NIDCORRECTIONPORTAL_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["NIDCORRECTIONPORTAL_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
