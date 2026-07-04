// Typed models for the NidCorrectionPortal SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Application {
  data?: any
  message?: string
  note?: string
  reason: string
  success?: boolean
}

export interface ApplicationLoadMatch {
  id: string
}

export interface ApplicationCreateData {
  id: string
}

export interface Authentication {
  message?: string
  otp: string
  password: string
  session_id?: string
  success?: boolean
  token?: string
  user?: Record<string, any>
  username: string
}

export type AuthenticationCreateData = Partial<Authentication>

export interface CorrectionRequest {
  applicant_name?: string
  category?: string
  data?: any
  id?: string
  nid?: string
  source?: string
  status?: string
  submitted_at?: string
  success?: boolean
  updated_at?: string
}

export interface CorrectionRequestLoadMatch {
  id: string
}

export type CorrectionRequestListMatch = Partial<CorrectionRequest>

