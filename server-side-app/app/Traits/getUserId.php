<?php

namespace App\Traits;

use Tymon\JWTAuth\Facades\JWTAuth;

trait getUserId{

    public function getUser($request){
        if($request){
         $token = $request->bearerToken();
         $jwtToken = JWTAuth::parseToken($token);
         $payload = $jwtToken->getPayload();
         $userId = $payload['sub']; 
         return $userId;
        }else{
         echo "we dont have a user";
        }
     }
}