<?php

namespace App\Repositories\implementation;

use App\Models\User;
use Illuminate\Validation\UnauthorizedException;
use App\Repositories\interface\UserRepositoryInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserRepository implements UserRepositoryInterface {

    public function all(){
        return User::all();
    }
    
}