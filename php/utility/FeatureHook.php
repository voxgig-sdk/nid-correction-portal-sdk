<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: feature_hook

class NidCorrectionPortalFeatureHook
{
    public static function call(NidCorrectionPortalContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
