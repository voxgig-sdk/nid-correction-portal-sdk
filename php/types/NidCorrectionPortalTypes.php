<?php
declare(strict_types=1);

// Typed models for the NidCorrectionPortal SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Application entity data model. */
class Application
{
    public ?string $id = null;
}

/** Request payload for Application#load. */
class ApplicationLoadMatch
{
    public string $id;
}

/** Request payload for Application#create. */
class ApplicationCreateData
{
    public string $id;
}

/** Authentication entity data model. */
class Authentication
{
    public ?string $id = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?string $organization = null;
    public string $otp;
    public string $password;
    public ?string $role = null;
    public ?string $sessionId = null;
    public ?bool $success = null;
    public string $username;
}

/** Request payload for Authentication#create. */
class AuthenticationCreateData
{
    public ?string $id = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?string $organization = null;
    public string $otp;
    public string $password;
    public ?string $role = null;
    public ?string $sessionId = null;
    public ?bool $success = null;
    public string $username;
}

/** CorrectionRequest entity data model. */
class CorrectionRequest
{
    public ?string $applicantName = null;
    public ?string $category = null;
    public ?array $changes = null;
    public ?array $documents = null;
    public ?array $history = null;
    public ?string $id = null;
    public ?string $nid = null;
    public ?string $notes = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $submittedAt = null;
    public ?string $updatedAt = null;
}

/** Request payload for CorrectionRequest#load. */
class CorrectionRequestLoadMatch
{
    public string $id;
}

/** Request payload for CorrectionRequest#list. */
class CorrectionRequestListMatch
{
    public ?string $applicant_name = null;
    public ?string $category = null;
    public ?int $limit = null;
    public ?string $nid = null;
    public ?int $page = null;
    public ?string $source = null;
    public ?string $status = null;
}

