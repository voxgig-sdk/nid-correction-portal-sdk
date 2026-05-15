<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: result_body

class NidCorrectionPortalResultBody
{
    public static function call(NidCorrectionPortalContext $ctx): ?NidCorrectionPortalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
