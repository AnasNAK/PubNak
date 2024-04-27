<?php

namespace App\Services\Implementation;

use App\Models\Post;
use App\Http\Request\StorePostRequest;
use App\Http\Request\UpdatePostRequest;

class PostRepository implements PostRepositoryInterface {



    public function all(){

        return Post::all()->latest();
    }


}