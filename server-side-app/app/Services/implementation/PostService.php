<?php

namespace App\Services\Implementation;

use app\Models\Post;
use App\Http\Requests\StorePostRequest;
use app\Http\Request\UpdatePostRequest;
use App\Services\contract\PostServiceInterface;
use App\Repositories\interface\PostRepositoryInterface;


class PostService implements PostServiceInterface {

public function __construct(public PostRepositoryInterface $Repository){
    
}

public function all(){
    return $this->Repository->all();
}

public function store(StorePostRequest $request){

   return $this->Repository->store($request);
}

// public function show(Post $category){
//     return $this->Repository->show($category);

// }

// public function update(Post $category, UpdatePostRequest $request)
// {
//     return $this->Repository->update($category, $request);
// }

// public function delete(Post $category){
//     return $this->Repository->delete($category);
// }



}
