<?php

namespace App\Repositories\Implementation;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Request\UpdatePostRequest;
use App\Repositories\interface\PostRepositoryInterface;

class PostRepository implements PostRepositoryInterface {



    public function all(){

        return Post::latest()->get();
    }

    public function store(StorePostRequest $request){
        
        
    }


}