<?php
declare(strict_types=1);

// CorrectionRequest entity test

require_once __DIR__ . '/../nidcorrectionportal_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CorrectionRequestEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = NidCorrectionPortalSDK::test(null, null);
        $ent = $testsdk->CorrectionRequest(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = correction_request_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "correction_request." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $correction_request_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.correction_request")));
        $correction_request_ref01_data = null;
        if (count($correction_request_ref01_data_raw) > 0) {
            $correction_request_ref01_data = Helpers::to_map($correction_request_ref01_data_raw[0][1]);
        }

        // LIST
        $correction_request_ref01_ent = $client->CorrectionRequest(null);
        $correction_request_ref01_match = [];

        [$correction_request_ref01_list_result, $err] = $correction_request_ref01_ent->list($correction_request_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($correction_request_ref01_list_result);

        // LOAD
        $correction_request_ref01_match_dt0 = [
            "id" => $correction_request_ref01_data["id"],
        ];
        [$correction_request_ref01_data_dt0_loaded, $err] = $correction_request_ref01_ent->load($correction_request_ref01_match_dt0, null);
        $this->assertNull($err);
        $correction_request_ref01_data_dt0_load_result = Helpers::to_map($correction_request_ref01_data_dt0_loaded);
        $this->assertNotNull($correction_request_ref01_data_dt0_load_result);
        $this->assertEquals($correction_request_ref01_data_dt0_load_result["id"], $correction_request_ref01_data["id"]);

    }
}

function correction_request_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/correction_request/CorrectionRequestTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = NidCorrectionPortalSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["correction_request01", "correction_request02", "correction_request03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID" => $idmap,
        "NIDCORRECTIONPORTAL_TEST_LIVE" => "FALSE",
        "NIDCORRECTIONPORTAL_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["NIDCORRECTIONPORTAL_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new NidCorrectionPortalSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["NIDCORRECTIONPORTAL_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["NIDCORRECTIONPORTAL_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
