package voxgignidcorrectionportalsdk

import (
	"github.com/voxgig-sdk/nid-correction-portal-sdk/go/core"
	"github.com/voxgig-sdk/nid-correction-portal-sdk/go/entity"
	"github.com/voxgig-sdk/nid-correction-portal-sdk/go/feature"
	_ "github.com/voxgig-sdk/nid-correction-portal-sdk/go/utility"
)

// Type aliases preserve external API.
type NidCorrectionPortalSDK = core.NidCorrectionPortalSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NidCorrectionPortalEntity = core.NidCorrectionPortalEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NidCorrectionPortalError = core.NidCorrectionPortalError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewApplicationEntityFunc = func(client *core.NidCorrectionPortalSDK, entopts map[string]any) core.NidCorrectionPortalEntity {
		return entity.NewApplicationEntity(client, entopts)
	}
	core.NewAuthenticationEntityFunc = func(client *core.NidCorrectionPortalSDK, entopts map[string]any) core.NidCorrectionPortalEntity {
		return entity.NewAuthenticationEntity(client, entopts)
	}
	core.NewCorrectionRequestEntityFunc = func(client *core.NidCorrectionPortalSDK, entopts map[string]any) core.NidCorrectionPortalEntity {
		return entity.NewCorrectionRequestEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNidCorrectionPortalSDK = core.NewNidCorrectionPortalSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
