import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "application",
    "accessor": "Application",
    "op": "create",
    "method": "POST",
    "path": "/applications/{id}/approve",
    "action": "approve",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "Application approved successfully",
      "data": {
        "id": "x",
        "nid": "x",
        "applicantName": "x",
        "status": "pending",
        "category": "x",
        "source": "x",
        "submittedAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z",
        "changes": [
          {
            "field": "x",
            "oldValue": "x",
            "newValue": "x"
          }
        ],
        "notes": "x",
        "documents": [
          {
            "id": "x",
            "name": "x",
            "type": "x",
            "url": "x"
          }
        ],
        "history": [
          {
            "status": "x",
            "timestamp": "2026-01-01T00:00:00Z",
            "user": "x",
            "notes": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "create",
    "method": "POST",
    "path": "/applications/{id}/reject",
    "action": "reject",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "Application rejected successfully",
      "data": {
        "id": "x",
        "nid": "x",
        "applicantName": "x",
        "status": "pending",
        "category": "x",
        "source": "x",
        "submittedAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z",
        "changes": [
          {
            "field": "x",
            "oldValue": "x",
            "newValue": "x"
          }
        ],
        "notes": "x",
        "documents": [
          {
            "id": "x",
            "name": "x",
            "type": "x",
            "url": "x"
          }
        ],
        "history": [
          {
            "status": "x",
            "timestamp": "2026-01-01T00:00:00Z",
            "user": "x",
            "notes": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "create",
    "method": "POST",
    "path": "/applications/{id}/rollback",
    "action": "rollback",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "Application rolled back successfully",
      "data": {
        "id": "x",
        "nid": "x",
        "applicantName": "x",
        "status": "pending",
        "category": "x",
        "source": "x",
        "submittedAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z",
        "changes": [
          {
            "field": "x",
            "oldValue": "x",
            "newValue": "x"
          }
        ],
        "notes": "x",
        "documents": [
          {
            "id": "x",
            "name": "x",
            "type": "x",
            "url": "x"
          }
        ],
        "history": [
          {
            "status": "x",
            "timestamp": "2026-01-01T00:00:00Z",
            "user": "x",
            "notes": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "load",
    "method": "GET",
    "path": "/applications/{id}/download-pdf",
    "action": "download_pdf",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/pdf"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "correction_request",
    "accessor": "CorrectionRequest",
    "op": "list",
    "method": "GET",
    "path": "/correction-requests",
    "args": [],
    "select": {
      "applicant_name": "v1",
      "category": "v1",
      "limit": 20,
      "nid": "v1",
      "page": 1,
      "source": "v1",
      "status": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "nid",
      "applicantName",
      "status",
      "category",
      "source",
      "page",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "applicant_name",
        "wire": "applicantName"
      },
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "nid",
        "wire": "nid"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "source",
        "wire": "source"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "data": [
        {
          "id": "x",
          "nid": "x",
          "applicantName": "x",
          "status": "pending",
          "category": "x",
          "source": "x",
          "submittedAt": "2026-01-01T00:00:00Z",
          "updatedAt": "2026-01-01T00:00:00Z"
        }
      ],
      "pagination": {
        "currentPage": 1,
        "totalPages": 1,
        "totalItems": 1,
        "itemsPerPage": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "correction_request",
    "accessor": "CorrectionRequest",
    "op": "load",
    "method": "GET",
    "path": "/correction-requests/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "data": {
        "id": "x",
        "nid": "x",
        "applicantName": "x",
        "status": "pending",
        "category": "x",
        "source": "x",
        "submittedAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z",
        "changes": [
          {
            "field": "x",
            "oldValue": "x",
            "newValue": "x"
          }
        ],
        "notes": "x",
        "documents": [
          {
            "id": "x",
            "name": "x",
            "type": "x",
            "url": "x"
          }
        ],
        "history": [
          {
            "status": "x",
            "timestamp": "2026-01-01T00:00:00Z",
            "user": "x",
            "notes": "x"
          }
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
