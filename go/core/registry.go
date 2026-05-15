package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewApplicationEntityFunc func(client *NidCorrectionPortalSDK, entopts map[string]any) NidCorrectionPortalEntity

var NewAuthenticationEntityFunc func(client *NidCorrectionPortalSDK, entopts map[string]any) NidCorrectionPortalEntity

var NewCorrectionRequestEntityFunc func(client *NidCorrectionPortalSDK, entopts map[string]any) NidCorrectionPortalEntity

