<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

class BaseApiController extends Controller
{
    protected function respondWithToken($token, $name = null, $role = null , $code = 200)
    {
        $ttl = JWTAuth::factory()->getTTL();
        return response()->json([
            'name' => $name,
            'role' => $role,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $ttl * 60,
            'code' => $code
            

        ]);
    }

    protected function sendResponse($message, $result = null, $code = 200)
    {
        $response = [
            'success' => true,
            'message' => $message,
        ];
        if (!is_null($result)) {
            $response += ["data" => $result];
        }
        return response()->json($response, $code);
    }

    public function sendError($error, $errorMessages = [], $code = 404)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}
