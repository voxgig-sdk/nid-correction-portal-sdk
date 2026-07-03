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

func TestApplicationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Application(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApplicationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := applicationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "application." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NIDCORRECTIONPORTAL_TEST_APPLICATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		applicationRef01Ent := client.Application(nil)
		applicationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "application"}, setup.data), "application_ref01"))

		applicationRef01DataResult, err := applicationRef01Ent.Create(applicationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		applicationRef01Data = core.ToMapAny(applicationRef01DataResult)
		if applicationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		applicationRef01MatchDt0 := map[string]any{}
		applicationRef01DataDt0Loaded, err := applicationRef01Ent.Load(applicationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if applicationRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func applicationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "application", "ApplicationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read application test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse application test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"application01", "application02", "application03"},
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
	entidEnvRaw := os.Getenv("NIDCORRECTIONPORTAL_TEST_APPLICATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NIDCORRECTIONPORTAL_TEST_APPLICATION_ENTID": idmap,
		"NIDCORRECTIONPORTAL_TEST_LIVE":      "FALSE",
		"NIDCORRECTIONPORTAL_TEST_EXPLAIN":   "FALSE",
		"NIDCORRECTIONPORTAL_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["NIDCORRECTIONPORTAL_TEST_APPLICATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NIDCORRECTIONPORTAL_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["NIDCORRECTIONPORTAL_APIKEY"],
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
