package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/nid-correction-portal-sdk/go"
	"github.com/voxgig-sdk/nid-correction-portal-sdk/go/core"

	vs "github.com/voxgig-sdk/nid-correction-portal-sdk/go/utility/struct"
)

func TestCorrectionRequestEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CorrectionRequest(nil)
		if ent == nil {
			t.Fatal("expected non-nil CorrectionRequestEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := correction_requestBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "correction_request." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		correctionRequestRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.correction_request", setup.data)))
		var correctionRequestRef01Data map[string]any
		if len(correctionRequestRef01DataRaw) > 0 {
			correctionRequestRef01Data = core.ToMapAny(correctionRequestRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = correctionRequestRef01Data

		// LIST
		correctionRequestRef01Ent := client.CorrectionRequest(nil)
		correctionRequestRef01Match := map[string]any{}

		correctionRequestRef01ListResult, err := correctionRequestRef01Ent.List(correctionRequestRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, correctionRequestRef01ListOk := correctionRequestRef01ListResult.([]any)
		if !correctionRequestRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", correctionRequestRef01ListResult)
		}

		// LOAD
		correctionRequestRef01MatchDt0 := map[string]any{
			"id": correctionRequestRef01Data["id"],
		}
		correctionRequestRef01DataDt0Loaded, err := correctionRequestRef01Ent.Load(correctionRequestRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		correctionRequestRef01DataDt0LoadResult := core.ToMapAny(correctionRequestRef01DataDt0Loaded)
		if correctionRequestRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if correctionRequestRef01DataDt0LoadResult["id"] != correctionRequestRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func correction_requestBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "correction_request", "CorrectionRequestTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read correction_request test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse correction_request test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"correction_request01", "correction_request02", "correction_request03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID": idmap,
		"NIDCORRECTIONPORTAL_TEST_LIVE":      "FALSE",
		"NIDCORRECTIONPORTAL_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["NIDCORRECTIONPORTAL_TEST_CORRECTION_REQUEST_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NIDCORRECTIONPORTAL_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewNidCorrectionPortalSDK(core.ToMapAny(mergedOpts))
	}

	live := env["NIDCORRECTIONPORTAL_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NIDCORRECTIONPORTAL_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
