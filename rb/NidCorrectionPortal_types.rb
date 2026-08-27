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
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String]
Application = Struct.new(
  :id,
  :notes,
  :reason,
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
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String]
ApplicationCreateData = Struct.new(
  :id,
  :notes,
  :reason,
  keyword_init: true
)

# Authentication entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
#
# @!attribute [rw] otp
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] username
#   @return [String]
Authentication = Struct.new(
  :id,
  :message,
  :name,
  :organization,
  :otp,
  :password,
  :role,
  :sessionId,
  :success,
  :username,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
#
# @!attribute [rw] otp
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] username
#   @return [String]
AuthenticationCreateData = Struct.new(
  :id,
  :message,
  :name,
  :organization,
  :otp,
  :password,
  :role,
  :sessionId,
  :success,
  :username,
  keyword_init: true
)

# CorrectionRequest entity data model.
#
# @!attribute [rw] applicantName
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] changes
#   @return [Array, nil]
#
# @!attribute [rw] documents
#   @return [Array, nil]
#
# @!attribute [rw] history
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] nid
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] submittedAt
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
CorrectionRequest = Struct.new(
  :applicantName,
  :category,
  :changes,
  :documents,
  :history,
  :id,
  :nid,
  :notes,
  :source,
  :status,
  :submittedAt,
  :updatedAt,
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

# Request payload for CorrectionRequest#list.
#
# @!attribute [rw] applicantName
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] changes
#   @return [Array, nil]
#
# @!attribute [rw] documents
#   @return [Array, nil]
#
# @!attribute [rw] history
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] nid
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] submittedAt
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
CorrectionRequestListMatch = Struct.new(
  :applicantName,
  :category,
  :changes,
  :documents,
  :history,
  :id,
  :nid,
  :notes,
  :source,
  :status,
  :submittedAt,
  :updatedAt,
  keyword_init: true
)

