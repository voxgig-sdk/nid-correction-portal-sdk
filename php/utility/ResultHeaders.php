<?php
declare(strict_types=1);

// NidCorrectionPortal SDK utility: result_headers

class NidCorrectionPortalResultHeaders
{
    public static function call(NidCorrectionPortalContext $ctx): ?NidCorrectionPortalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
