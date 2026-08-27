# NidCorrectionPortal SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "type": "`$STRING`",
          },
          {
            "name": "notes",
            "short": "Approval notes or comments",
            "type": "`$STRING`",
          },
          {
            "name": "reason",
            "req": True,
            "short": "Reason for rejection",
            "type": "`$STRING`",
          },
        ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/applications/{id}/approve",
                "parts": [
                  "applications",
                  "{id}",
                  "approve",
                ],
                "select": {
                  "$action": "approve",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/applications/{id}/reject",
                "parts": [
                  "applications",
                  "{id}",
                  "reject",
                ],
                "select": {
                  "$action": "reject",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/applications/{id}/rollback",
                "parts": [
                  "applications",
                  "{id}",
                  "rollback",
                ],
                "select": {
                  "$action": "rollback",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/applications/{id}/download-pdf",
                "parts": [
                  "applications",
                  "{id}",
                  "download-pdf",
                ],
                "select": {
                  "$action": "download_pdf",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "short": "User ID",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Full name",
            "type": "`$STRING`",
          },
          {
            "name": "organization",
            "short": "Organization name",
            "type": "`$STRING`",
          },
          {
            "name": "otp",
            "req": True,
            "short": "6-digit OTP code",
            "type": "`$STRING`",
          },
          {
            "name": "password",
            "req": True,
            "short": "User password",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "short": "User role",
            "type": "`$STRING`",
          },
          {
            "name": "sessionId",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "Session identifier for OTP verification",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "username",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Username or employee ID",
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "auth",
                  "login",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/auth/logout",
                "parts": [
                  "auth",
                  "logout",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/auth/verify-otp",
                "parts": [
                  "auth",
                  "verify-otp",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
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
            "short": "Name of the applicant",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "short": "Category of correction",
            "type": "`$STRING`",
          },
          {
            "name": "changes",
            "short": "List of field changes",
            "type": "`$ARRAY`",
          },
          {
            "name": "documents",
            "short": "Supporting documents",
            "type": "`$ARRAY`",
          },
          {
            "name": "history",
            "short": "Status change history",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Correction request ID",
            "type": "`$STRING`",
          },
          {
            "name": "nid",
            "short": "National ID number",
            "type": "`$STRING`",
          },
          {
            "name": "notes",
            "short": "Additional notes",
            "type": "`$STRING`",
          },
          {
            "name": "source",
            "short": "Source of the request",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the request",
            "type": "`$STRING`",
          },
          {
            "name": "submittedAt",
            "short": "Submission timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "short": "Last update timestamp",
            "type": "`$STRING`",
          },
        ],
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "nid",
                      "orig": "nid",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "source",
                      "orig": "source",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/correction-requests",
                "parts": [
                  "correction-requests",
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/correction-requests/{id}",
                "parts": [
                  "correction-requests",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
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
