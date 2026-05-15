<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NidCorrectionPortalMakeContext
{
    public static function call(array $ctxmap, ?NidCorrectionPortalContext $basectx): NidCorrectionPortalContext
    {
        return new NidCorrectionPortalContext($ctxmap, $basectx);
    }
}
