<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: prepare_body

class NidCorrectionPortalPrepareBody
{
    public static function call(NidCorrectionPortalContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
