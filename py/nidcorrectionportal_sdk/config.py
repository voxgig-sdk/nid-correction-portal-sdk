# NidCorrectionPortal SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "NidCorrectionPortal",
            "slug": "nid-correction-portal",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://cms-card-management-system-nid-cms-steel.vercel.app/api",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "application": {},
                "authentication": {},
                "correction_request": {},
            },
        },
        "entity": {
      "application": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "application",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/applications/{id}/approve",
                "segments": [
                  {
                    "lit": "applications",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "approve",
                  },
                ],
                "parts": [
                  "applications",
                  "{id}",
                  "approve",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "approve",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/applications/{id}/reject",
                "segments": [
                  {
                    "lit": "applications",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "reject",
                  },
                ],
                "parts": [
                  "applications",
                  "{id}",
                  "reject",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "reject",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/applications/{id}/rollback",
                "segments": [
                  {
                    "lit": "applications",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "rollback",
                  },
                ],
                "parts": [
                  "applications",
                  "{id}",
                  "rollback",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "rollback",
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/applications/{id}/download-pdf",
                "segments": [
                  {
                    "lit": "applications",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "download-pdf",
                  },
                ],
                "parts": [
                  "applications",
                  "{id}",
                  "download-pdf",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "download_pdf",
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "authentication": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "User ID",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Full name",
          },
          {
            "name": "organization",
            "title": "Organization",
            "type": "`$STRING`",
            "short": "Organization name",
          },
          {
            "name": "otp",
            "title": "Otp",
            "type": "`$STRING`",
            "req": True,
            "short": "6-digit OTP code",
          },
          {
            "name": "password",
            "title": "Password",
            "type": "`$STRING`",
            "req": True,
            "short": "User password",
            "format": "password",
          },
          {
            "name": "role",
            "title": "Role",
            "type": "`$STRING`",
            "short": "User role",
          },
          {
            "name": "sessionId",
            "title": "Session Id",
            "type": "`$STRING`",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "Session identifier for OTP verification",
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "username",
            "title": "Username",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "short": "Username or employee ID",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "authentication",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/auth/login",
                "segments": [
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "login",
                  },
                ],
                "parts": [
                  "auth",
                  "login",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/auth/logout",
                "segments": [
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "logout",
                  },
                ],
                "parts": [
                  "auth",
                  "logout",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/auth/verify-otp",
                "segments": [
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "verify-otp",
                  },
                ],
                "parts": [
                  "auth",
                  "verify-otp",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "correction_request": {
        "fields": [
          {
            "name": "applicantName",
            "title": "Applicant Name",
            "type": "`$STRING`",
            "short": "Name of the applicant",
          },
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
            "short": "Category of correction",
          },
          {
            "name": "changes",
            "title": "Changes",
            "type": "`$ARRAY`",
            "short": "List of field changes",
          },
          {
            "name": "documents",
            "title": "Documents",
            "type": "`$ARRAY`",
            "short": "Supporting documents",
          },
          {
            "name": "history",
            "title": "History",
            "type": "`$ARRAY`",
            "short": "Status change history",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Correction request ID",
          },
          {
            "name": "nid",
            "title": "Nid",
            "type": "`$STRING`",
            "short": "National ID number",
          },
          {
            "name": "notes",
            "title": "Notes",
            "type": "`$STRING`",
            "short": "Additional notes",
          },
          {
            "name": "source",
            "title": "Source",
            "type": "`$STRING`",
            "short": "Source of the request",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the request",
          },
          {
            "name": "submittedAt",
            "title": "Submitted At",
            "type": "`$STRING`",
            "short": "Submission timestamp",
            "format": "date-time",
          },
          {
            "name": "updatedAt",
            "title": "Updated At",
            "type": "`$STRING`",
            "short": "Last update timestamp",
            "format": "date-time",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "correction_request",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/correction-requests",
                "segments": [
                  {
                    "lit": "correction-requests",
                  },
                ],
                "parts": [
                  "correction-requests",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "applicant_name",
                      "orig": "applicant_name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "nid",
                      "orig": "nid",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "source",
                      "orig": "source",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "applicant_name",
                    "category",
                    "limit",
                    "nid",
                    "page",
                    "source",
                    "status",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/correction-requests/{id}",
                "segments": [
                  {
                    "lit": "correction-requests",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "correction-requests",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
