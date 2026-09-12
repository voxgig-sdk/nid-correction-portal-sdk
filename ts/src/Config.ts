
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'NidCorrectionPortal',
        slug: "nid-correction-portal",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://cms-card-management-system-nid-cms-steel.vercel.app/api",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      application: {
      },

      authentication: {
      },

      correction_request: {
      },

    }
  }


  entity = {
    "application": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "notes",
          "short": "Approval notes or comments",
          "type": "`$STRING`"
        },
        {
          "name": "reason",
          "req": true,
          "short": "Reason for rejection",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "application",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/applications/{id}/approve",
              "segments": [
                {
                  "lit": "applications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "approve"
                }
              ],
              "select": {
                "$action": "approve",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "applications",
                "{id}",
                "approve"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/applications/{id}/reject",
              "segments": [
                {
                  "lit": "applications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "reject"
                }
              ],
              "select": {
                "$action": "reject",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "applications",
                "{id}",
                "reject"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/applications/{id}/rollback",
              "segments": [
                {
                  "lit": "applications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "rollback"
                }
              ],
              "select": {
                "$action": "rollback",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "applications",
                "{id}",
                "rollback"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/applications/{id}/download-pdf",
              "segments": [
                {
                  "lit": "applications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "download-pdf"
                }
              ],
              "select": {
                "$action": "download_pdf",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "applications",
                "{id}",
                "download-pdf"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "authentication": {
      "fields": [
        {
          "name": "id",
          "short": "User ID",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Full name",
          "type": "`$STRING`"
        },
        {
          "name": "organization",
          "short": "Organization name",
          "type": "`$STRING`"
        },
        {
          "name": "otp",
          "req": true,
          "short": "6-digit OTP code",
          "type": "`$STRING`"
        },
        {
          "format": "password",
          "name": "password",
          "req": true,
          "short": "User password",
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "short": "User role",
          "type": "`$STRING`"
        },
        {
          "name": "sessionId",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Session identifier for OTP verification",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "username",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Username or employee ID",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "authentication",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/auth/login",
              "segments": [
                {
                  "lit": "auth"
                },
                {
                  "lit": "login"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "auth",
                "login"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/auth/logout",
              "segments": [
                {
                  "lit": "auth"
                },
                {
                  "lit": "logout"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "auth",
                "logout"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/auth/verify-otp",
              "segments": [
                {
                  "lit": "auth"
                },
                {
                  "lit": "verify-otp"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.user`"
              },
              "parts": [
                "auth",
                "verify-otp"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "correction_request": {
      "fields": [
        {
          "name": "applicantName",
          "short": "Name of the applicant",
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "short": "Category of correction",
          "type": "`$STRING`"
        },
        {
          "name": "changes",
          "short": "List of field changes",
          "type": "`$ARRAY`"
        },
        {
          "name": "documents",
          "short": "Supporting documents",
          "type": "`$ARRAY`"
        },
        {
          "name": "history",
          "short": "Status change history",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Correction request ID",
          "type": "`$STRING`"
        },
        {
          "name": "nid",
          "short": "National ID number",
          "type": "`$STRING`"
        },
        {
          "name": "notes",
          "short": "Additional notes",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "Source of the request",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Current status of the request",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "submittedAt",
          "short": "Submission timestamp",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "Last update timestamp",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "correction_request",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "applicant_name",
                    "orig": "applicant_name",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "nid",
                    "orig": "nid",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/correction-requests",
              "segments": [
                {
                  "lit": "correction-requests"
                }
              ],
              "select": {
                "exist": [
                  "applicant_name",
                  "category",
                  "limit",
                  "nid",
                  "page",
                  "source",
                  "status"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "correction-requests"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/correction-requests/{id}",
              "segments": [
                {
                  "lit": "correction-requests"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "correction-requests",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

