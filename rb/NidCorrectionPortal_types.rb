# frozen_string_literal: true

# Typed models for the NidCorrectionPortal SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Application entity data model.
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Application = Struct.new(
  :data,
  :message,
  :note,
  :reason,
  :success,
  keyword_init: true
)

# Request payload for Application#load.
#
# @!attribute [rw] id
#   @return [String]
ApplicationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Application#create.
#
# @!attribute [rw] id
#   @return [String]
ApplicationCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Authentication entity data model.
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] otp
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] username
#   @return [String]
Authentication = Struct.new(
  :message,
  :otp,
  :password,
  :session_id,
  :success,
  :token,
  :user,
  :username,
  keyword_init: true
)

# Match filter for Authentication#create (any subset of Authentication fields).
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] otp
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
AuthenticationCreateData = Struct.new(
  :message,
  :otp,
  :password,
  :session_id,
  :success,
  :token,
  :user,
  :username,
  keyword_init: true
)

# CorrectionRequest entity data model.
#
# @!attribute [rw] applicant_name
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] nid
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] submitted_at
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
CorrectionRequest = Struct.new(
  :applicant_name,
  :category,
  :data,
  :id,
  :nid,
  :source,
  :status,
  :submitted_at,
  :success,
  :updated_at,
  keyword_init: true
)

# Request payload for CorrectionRequest#load.
#
# @!attribute [rw] id
#   @return [String]
CorrectionRequestLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for CorrectionRequest#list (any subset of CorrectionRequest fields).
#
# @!attribute [rw] applicant_name
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] nid
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] submitted_at
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
CorrectionRequestListMatch = Struct.new(
  :applicant_name,
  :category,
  :data,
  :id,
  :nid,
  :source,
  :status,
  :submitted_at,
  :success,
  :updated_at,
  keyword_init: true
)

