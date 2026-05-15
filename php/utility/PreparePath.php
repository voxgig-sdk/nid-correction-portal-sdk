<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: prepare_path

class NidCorrectionPortalPreparePath
{
    public static function call(NidCorrectionPortalContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
