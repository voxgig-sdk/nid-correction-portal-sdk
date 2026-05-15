# NidCorrectionPortal SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NidCorrectionPortalUtility.registrar = ->(u) {
  u.clean = NidCorrectionPortalUtilities::Clean
  u.done = NidCorrectionPortalUtilities::Done
  u.make_error = NidCorrectionPortalUtilities::MakeError
  u.feature_add = NidCorrectionPortalUtilities::FeatureAdd
  u.feature_hook = NidCorrectionPortalUtilities::FeatureHook
  u.feature_init = NidCorrectionPortalUtilities::FeatureInit
  u.fetcher = NidCorrectionPortalUtilities::Fetcher
  u.make_fetch_def = NidCorrectionPortalUtilities::MakeFetchDef
  u.make_context = NidCorrectionPortalUtilities::MakeContext
  u.make_options = NidCorrectionPortalUtilities::MakeOptions
  u.make_request = NidCorrectionPortalUtilities::MakeRequest
  u.make_response = NidCorrectionPortalUtilities::MakeResponse
  u.make_result = NidCorrectionPortalUtilities::MakeResult
  u.make_point = NidCorrectionPortalUtilities::MakePoint
  u.make_spec = NidCorrectionPortalUtilities::MakeSpec
  u.make_url = NidCorrectionPortalUtilities::MakeUrl
  u.param = NidCorrectionPortalUtilities::Param
  u.prepare_auth = NidCorrectionPortalUtilities::PrepareAuth
  u.prepare_body = NidCorrectionPortalUtilities::PrepareBody
  u.prepare_headers = NidCorrectionPortalUtilities::PrepareHeaders
  u.prepare_method = NidCorrectionPortalUtilities::PrepareMethod
  u.prepare_params = NidCorrectionPortalUtilities::PrepareParams
  u.prepare_path = NidCorrectionPortalUtilities::PreparePath
  u.prepare_query = NidCorrectionPortalUtilities::PrepareQuery
  u.result_basic = NidCorrectionPortalUtilities::ResultBasic
  u.result_body = NidCorrectionPortalUtilities::ResultBody
  u.result_headers = NidCorrectionPortalUtilities::ResultHeaders
  u.transform_request = NidCorrectionPortalUtilities::TransformRequest
  u.transform_response = NidCorrectionPortalUtilities::TransformResponse
}
