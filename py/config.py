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
            "name": "data",
            "req": False,
            "type": "`$ANY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "note",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "reason",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "application",
        "op": {
          "create": {
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
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
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
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
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
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 2,
              },
            ],
            "input": "data",
            "key$": "create",
          },
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "otp",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "password",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "session_id",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "user",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "username",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "authentication",
        "op": {
          "create": {
            "name": "create",
            "points": [
              {
                "method": "POST",
                "orig": "/auth/login",
                "parts": [
                  "auth",
                  "login",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
                "method": "POST",
                "orig": "/auth/logout",
                "parts": [
                  "auth",
                  "logout",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 1,
              },
              {
                "method": "POST",
                "orig": "/auth/verify-otp",
                "parts": [
                  "auth",
                  "verify-otp",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 2,
              },
            ],
            "input": "data",
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
            "name": "applicant_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$ANY`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "source",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "submitted_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "correction_request",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "applicant_name",
                      "orig": "applicant_name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "nid",
                      "orig": "nid",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "source",
                      "orig": "source",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
