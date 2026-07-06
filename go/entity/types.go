// Typed models for the NidCorrectionPortal SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Application is the typed data model for the application entity.
type Application struct {
	Data *any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Note *string `json:"note,omitempty"`
	Reason string `json:"reason"`
	Success *bool `json:"success,omitempty"`
}

// ApplicationLoadMatch is the typed request payload for Application.LoadTyped.
type ApplicationLoadMatch struct {
	Id string `json:"id"`
}

// ApplicationCreateData is the typed request payload for Application.CreateTyped.
type ApplicationCreateData struct {
	Id string `json:"id"`
}

// Authentication is the typed data model for the authentication entity.
type Authentication struct {
	Message *string `json:"message,omitempty"`
	Otp string `json:"otp"`
	Password string `json:"password"`
	SessionId *string `json:"session_id,omitempty"`
	Success *bool `json:"success,omitempty"`
	Token *string `json:"token,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	Username string `json:"username"`
}

// AuthenticationCreateData is the typed request payload for Authentication.CreateTyped.
type AuthenticationCreateData struct {
	Message *string `json:"message,omitempty"`
	Otp string `json:"otp"`
	Password string `json:"password"`
	SessionId *string `json:"session_id,omitempty"`
	Success *bool `json:"success,omitempty"`
	Token *string `json:"token,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	Username string `json:"username"`
}

// CorrectionRequest is the typed data model for the correction_request entity.
type CorrectionRequest struct {
	ApplicantName *string `json:"applicant_name,omitempty"`
	Category *string `json:"category,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Nid *string `json:"nid,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	SubmittedAt *string `json:"submitted_at,omitempty"`
	Success *bool `json:"success,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CorrectionRequestLoadMatch is the typed request payload for CorrectionRequest.LoadTyped.
type CorrectionRequestLoadMatch struct {
	Id string `json:"id"`
}

// CorrectionRequestListMatch is the typed request payload for CorrectionRequest.ListTyped.
type CorrectionRequestListMatch struct {
	ApplicantName *string `json:"applicant_name,omitempty"`
	Category *string `json:"category,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Nid *string `json:"nid,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	SubmittedAt *string `json:"submitted_at,omitempty"`
	Success *bool `json:"success,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
