<?php

namespace App\Services\Implementation;

use app\Models\Post;
use App\Http\Requests\StorePostRequest;
use app\Http\Requests\UpdatePostRequest;
use App\Services\contract\PostServiceInterface;
use App\Repositories\interface\PostRepositoryInterface;
use Illuminate\Http\Request;

class PostService implements PostServiceInterface {

public function __construct(public PostRepositoryInterface $Repository){
    
}

public function all(){
    return $this->Repository->all();
}

public function store(StorePostRequest $request){

   return $this->Repository->store($request);
}

public function show(Post $post){
    return $this->Repository->show($post);

}

public function update(Post $category, UpdatePostRequest $request)
{
    return $this->Repository->update($category, $request);
}

public function delete(Post $post){
    return $this->Repository->delete($post);
}

public function MyPosts(Request $request){
    return $this->Repository->MyPosts( $request);
}
public function addFav( Post $post ,Request $request){
    return $this->Repository->addFav( $post ,$request);
}
public function myFav(Request $request){
    return $this->Repository->myFav( $request);
}


 public function Statistics(){

    return $this->Repository->Statistics();
 }



}
