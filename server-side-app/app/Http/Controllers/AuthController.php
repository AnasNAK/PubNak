<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Client;
use App\Models\Influencer;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;

class AuthController extends BaseApiController
{

    public function users(){
        $users = [
            'influencers' => Influencer::with('profileImage')->get(),
            'clients' => Client::with('profileImage')->get(),
        ];
    
        return $users;
    }


    public function login(LoginUserRequest $request)
    {
        $credentials = $request->validated();

        if (!$token = JWTAuth::attempt($credentials)) {
            return $this->sendError(error: 'Unauthorized', code: 401);
        }
        $user = User::where('email', $request->email)->first();

        $role = $user ? $user->role : null;
        $name = $user ? $user->name : null;
        if($role === 'Admin'){
            return $this->respondWithToken($token, $name, $role , code : 207);

        }

        return $this->respondWithToken($token, $name, $role );
    }

 
    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        try {
            $newToken = JWTAuth::parseToken()->refresh();
            return $this->respondWithToken($newToken );
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

     public function register(RegisterUserRequest $request)
    {
        try {
            $validatedData = $request->validated();
            $validatedData['password'] = bcrypt($validatedData['password']);
         

            if($request->role === "Influencer"){

                
                $user = Influencer::create($validatedData);

            }elseif($request->role === "Client"){
                $user = Client::create($validatedData);

            }else{
                return $this->sendError('problem in role part ',$code= 403);

            }

          
            $response = [
                'user' => $user
            ];
            return $this->sendResponse($response, 'User registered successfully.');
        } catch (\Exception $e) {

            return $this->sendError('Registration failed.', [$e->getMessage()]);
        }
    }
}
