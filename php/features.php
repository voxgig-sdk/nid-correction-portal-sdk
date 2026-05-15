<?php
declare(strict_types=1);

// NidCorrectionPortal SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NidCorrectionPortalFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NidCorrectionPortalBaseFeature();
            case "test":
                return new NidCorrectionPortalTestFeature();
            default:
                return new NidCorrectionPortalBaseFeature();
        }
    }
}
