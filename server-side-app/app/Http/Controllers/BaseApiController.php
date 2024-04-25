<?php

namespace App\Http\Controllers;


class BaseApiController extends Controller
{
    protected function respondWithToken($token, $name = null, $role = null)
    {
        return response()->json([
            'name' => $name,
            'role' => $role,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 4000000000000
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
