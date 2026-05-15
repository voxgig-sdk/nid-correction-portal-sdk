<?php
declare(strict_types=1);

// NidCorrectionPortal SDK base feature

class NidCorrectionPortalBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NidCorrectionPortalContext $ctx, array $options): void {}
    public function PostConstruct(NidCorrectionPortalContext $ctx): void {}
    public function PostConstructEntity(NidCorrectionPortalContext $ctx): void {}
    public function SetData(NidCorrectionPortalContext $ctx): void {}
    public function GetData(NidCorrectionPortalContext $ctx): void {}
    public function GetMatch(NidCorrectionPortalContext $ctx): void {}
    public function SetMatch(NidCorrectionPortalContext $ctx): void {}
    public function PrePoint(NidCorrectionPortalContext $ctx): void {}
    public function PreSpec(NidCorrectionPortalContext $ctx): void {}
    public function PreRequest(NidCorrectionPortalContext $ctx): void {}
    public function PreResponse(NidCorrectionPortalContext $ctx): void {}
    public function PreResult(NidCorrectionPortalContext $ctx): void {}
    public function PreDone(NidCorrectionPortalContext $ctx): void {}
    public function PreUnexpected(NidCorrectionPortalContext $ctx): void {}
}
