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
    public mixed $data = null;
    public ?string $message = null;
    public ?string $note = null;
    public string $reason;
    public ?bool $success = null;
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
    public ?string $message = null;
    public string $otp;
    public string $password;
    public ?string $session_id = null;
    public ?bool $success = null;
    public ?string $token = null;
    public ?array $user = null;
    public string $username;
}

/** Match filter for Authentication#create (any subset of Authentication fields). */
class AuthenticationCreateData
{
    public ?string $message = null;
    public ?string $otp = null;
    public ?string $password = null;
    public ?string $session_id = null;
    public ?bool $success = null;
    public ?string $token = null;
    public ?array $user = null;
    public ?string $username = null;
}

/** CorrectionRequest entity data model. */
class CorrectionRequest
{
    public ?string $applicant_name = null;
    public ?string $category = null;
    public mixed $data = null;
    public ?string $id = null;
    public ?string $nid = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $submitted_at = null;
    public ?bool $success = null;
    public ?string $updated_at = null;
}

/** Request payload for CorrectionRequest#load. */
class CorrectionRequestLoadMatch
{
    public string $id;
}

/** Match filter for CorrectionRequest#list (any subset of CorrectionRequest fields). */
class CorrectionRequestListMatch
{
    public ?string $applicant_name = null;
    public ?string $category = null;
    public mixed $data = null;
    public ?string $id = null;
    public ?string $nid = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $submitted_at = null;
    public ?bool $success = null;
    public ?string $updated_at = null;
}

