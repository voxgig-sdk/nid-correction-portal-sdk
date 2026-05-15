<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: feature_add

class NidCorrectionPortalFeatureAdd
{
    public static function call(NidCorrectionPortalContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
