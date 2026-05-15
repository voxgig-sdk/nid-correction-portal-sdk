<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NidCorrectionPortalUtility::setRegistrar(function (NidCorrectionPortalUtility $u): void {
    $u->clean = [NidCorrectionPortalClean::class, 'call'];
    $u->done = [NidCorrectionPortalDone::class, 'call'];
    $u->make_error = [NidCorrectionPortalMakeError::class, 'call'];
    $u->feature_add = [NidCorrectionPortalFeatureAdd::class, 'call'];
    $u->feature_hook = [NidCorrectionPortalFeatureHook::class, 'call'];
    $u->feature_init = [NidCorrectionPortalFeatureInit::class, 'call'];
    $u->fetcher = [NidCorrectionPortalFetcher::class, 'call'];
    $u->make_fetch_def = [NidCorrectionPortalMakeFetchDef::class, 'call'];
    $u->make_context = [NidCorrectionPortalMakeContext::class, 'call'];
    $u->make_options = [NidCorrectionPortalMakeOptions::class, 'call'];
    $u->make_request = [NidCorrectionPortalMakeRequest::class, 'call'];
    $u->make_response = [NidCorrectionPortalMakeResponse::class, 'call'];
    $u->make_result = [NidCorrectionPortalMakeResult::class, 'call'];
    $u->make_point = [NidCorrectionPortalMakePoint::class, 'call'];
    $u->make_spec = [NidCorrectionPortalMakeSpec::class, 'call'];
    $u->make_url = [NidCorrectionPortalMakeUrl::class, 'call'];
    $u->param = [NidCorrectionPortalParam::class, 'call'];
    $u->prepare_auth = [NidCorrectionPortalPrepareAuth::class, 'call'];
    $u->prepare_body = [NidCorrectionPortalPrepareBody::class, 'call'];
    $u->prepare_headers = [NidCorrectionPortalPrepareHeaders::class, 'call'];
    $u->prepare_method = [NidCorrectionPortalPrepareMethod::class, 'call'];
    $u->prepare_params = [NidCorrectionPortalPrepareParams::class, 'call'];
    $u->prepare_path = [NidCorrectionPortalPreparePath::class, 'call'];
    $u->prepare_query = [NidCorrectionPortalPrepareQuery::class, 'call'];
    $u->result_basic = [NidCorrectionPortalResultBasic::class, 'call'];
    $u->result_body = [NidCorrectionPortalResultBody::class, 'call'];
    $u->result_headers = [NidCorrectionPortalResultHeaders::class, 'call'];
    $u->transform_request = [NidCorrectionPortalTransformRequest::class, 'call'];
    $u->transform_response = [NidCorrectionPortalTransformResponse::class, 'call'];
});
