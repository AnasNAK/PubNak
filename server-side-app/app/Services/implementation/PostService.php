<?php

namespace App\Services\implementation;

use app\Models\Post;
use app\Http\Request\StorePostRequest;
use app\Http\Request\UpdatePostRequest;
use app\Services\contract\PostServiceInterface;
use app\Repositories\interface\PostRepositoryInterface;


class PostService implements PostServiceInterface{

public function __construct(public PostRepositoryInterface $Repository){
    
}

public function all(){
    return $this->Repository->all();
}

public function store(StorePostRequest $request){

   return $this->Repository->store($request);
}

public function show(Post $category){
    return $this->Repository->show($category);

}

public function update(Post $category, UpdatePostRequest $request)
{
    return $this->Repository->update($category, $request);
}

public function delete(Post $category){
    return $this->Repository->delete($category);
}



}
