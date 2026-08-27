package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "NidCorrectionPortal",
			"slug": "nid-correction-portal",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://cms-card-management-system-nid-cms-steel.vercel.app/api",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"application": map[string]any{},
				"authentication": map[string]any{},
				"correction_request": map[string]any{},
			},
		},
		"entity": map[string]any{
			"application": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "Approval notes or comments",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason",
						"req": true,
						"short": "Reason for rejection",
						"type": "`$STRING`",
					},
				},
				"name": "application",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/applications/{id}/approve",
								"parts": []any{
									"applications",
									"{id}",
									"approve",
								},
								"select": map[string]any{
									"$action": "approve",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/applications/{id}/reject",
								"parts": []any{
									"applications",
									"{id}",
									"reject",
								},
								"select": map[string]any{
									"$action": "reject",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/applications/{id}/rollback",
								"parts": []any{
									"applications",
									"{id}",
									"rollback",
								},
								"select": map[string]any{
									"$action": "rollback",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/applications/{id}/download-pdf",
								"parts": []any{
									"applications",
									"{id}",
									"download-pdf",
								},
								"select": map[string]any{
									"$action": "download_pdf",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"authentication": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"short": "User ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Full name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organization",
						"short": "Organization name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "otp",
						"req": true,
						"short": "6-digit OTP code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "password",
						"req": true,
						"short": "User password",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"short": "User role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sessionId",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Session identifier for OTP verification",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "username",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Username or employee ID",
						"type": "`$STRING`",
					},
				},
				"name": "authentication",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/auth/login",
								"parts": []any{
									"auth",
									"login",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/auth/logout",
								"parts": []any{
									"auth",
									"logout",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/auth/verify-otp",
								"parts": []any{
									"auth",
									"verify-otp",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.user`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"correction_request": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "applicantName",
						"short": "Name of the applicant",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of correction",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "changes",
						"short": "List of field changes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "documents",
						"short": "Supporting documents",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "history",
						"short": "Status change history",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Correction request ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nid",
						"short": "National ID number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "Additional notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "Source of the request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "submittedAt",
						"short": "Submission timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"short": "Last update timestamp",
						"type": "`$STRING`",
					},
				},
				"name": "correction_request",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "applicant_name",
											"orig": "applicant_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "nid",
											"orig": "nid",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/correction-requests",
								"parts": []any{
									"correction-requests",
								},
								"select": map[string]any{
									"exist": []any{
										"applicant_name",
										"category",
										"limit",
										"nid",
										"page",
										"source",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/correction-requests/{id}",
								"parts": []any{
									"correction-requests",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
