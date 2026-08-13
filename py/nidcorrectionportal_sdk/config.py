# NidCorrectionPortal SDK configuration


def make_config():
    return {
        "main": {
            "name": "NidCorrectionPortal",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "notes",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "reason",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "application",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 2,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "authentication": {
        "fields": [
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "organization",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "otp",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "password",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "sessionId",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "username",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "authentication",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
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
                "index$": 0,
              },
              {
                "active": True,
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
                "index$": 1,
              },
              {
                "active": True,
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
                "index$": 2,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "correction_request": {
        "fields": [
          {
            "active": True,
            "name": "applicantName",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "changes",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "documents",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "history",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "nid",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "notes",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "source",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "submittedAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "updatedAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
        ],
        "name": "correction_request",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "applicant_name",
                      "orig": "applicant_name",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "nid",
                      "orig": "nid",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "source",
                      "orig": "source",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
