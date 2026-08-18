<?php
declare(strict_types=1);

// NidCorrectionPortal SDK configuration

class NidCorrectionPortalConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "NidCorrectionPortal",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://cms-card-management-system-nid-cms-steel.vercel.app/api",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "application" => [],
                    "authentication" => [],
                    "correction_request" => [],
                ],
            ],
            "entity" => [
        'application' => [
          'fields' => [
            [
              'name' => 'notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reason',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'application',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/applications/{id}/approve',
                  'parts' => [
                    'applications',
                    '{id}',
                    'approve',
                  ],
                  'select' => [
                    '$action' => 'approve',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/applications/{id}/reject',
                  'parts' => [
                    'applications',
                    '{id}',
                    'reject',
                  ],
                  'select' => [
                    '$action' => 'reject',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/applications/{id}/rollback',
                  'parts' => [
                    'applications',
                    '{id}',
                    'rollback',
                  ],
                  'select' => [
                    '$action' => 'rollback',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/applications/{id}/download-pdf',
                  'parts' => [
                    'applications',
                    '{id}',
                    'download-pdf',
                  ],
                  'select' => [
                    '$action' => 'download_pdf',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'authentication' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'organization',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'otp',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'password',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sessionId',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'type' => '`$STRING`',
            ],
            [
              'name' => 'success',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'username',
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'authentication',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/auth/login',
                  'parts' => [
                    'auth',
                    'login',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/auth/logout',
                  'parts' => [
                    'auth',
                    'logout',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/auth/verify-otp',
                  'parts' => [
                    'auth',
                    'verify-otp',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.user`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'correction_request' => [
          'fields' => [
            [
              'name' => 'applicantName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'changes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'documents',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'history',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'submittedAt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'updatedAt',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'correction_request',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'applicant_name',
                        'orig' => 'applicant_name',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'nid',
                        'orig' => 'nid',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'source',
                        'orig' => 'source',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/correction-requests',
                  'parts' => [
                    'correction-requests',
                  ],
                  'select' => [
                    'exist' => [
                      'applicant_name',
                      'category',
                      'limit',
                      'nid',
                      'page',
                      'source',
                      'status',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/correction-requests/{id}',
                  'parts' => [
                    'correction-requests',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NidCorrectionPortalFeatures::make_feature($name);
    }
}
