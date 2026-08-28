// Typed models for the NidCorrectionPortal SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Application {
  id?: string
  notes?: string
  reason: string
}

export interface ApplicationLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'download_pdf'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ApplicationCreateData {
  id: string
  notes?: string
  reason: string

  // Selects a custom action instead of the plain create:
  //   'approve' | 'reject' | 'rollback'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Authentication {
  id?: string
  message?: string
  name?: string
  organization?: string
  otp: string
  password: string
  role?: string
  sessionId?: string
  success?: boolean
  username: string
}

export interface AuthenticationCreateData {
  id?: string
  message?: string
  name?: string
  organization?: string
  otp: string
  password: string
  role?: string
  sessionId?: string
  success?: boolean
  username: string
}

export interface CorrectionRequest {
  applicantName?: string
  category?: string
  changes?: any[]
  documents?: any[]
  history?: any[]
  id?: string
  nid?: string
  notes?: string
  source?: string
  status?: string
  submittedAt?: string
  updatedAt?: string
}

export interface CorrectionRequestLoadMatch {
  id: string
}

export interface CorrectionRequestListMatch {
  applicant_name?: string
  category?: string
  limit?: number
  nid?: string
  page?: number
  source?: string
  status?: string
}

