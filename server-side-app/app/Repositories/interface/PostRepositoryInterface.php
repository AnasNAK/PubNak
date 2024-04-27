<?php


namespace App\Repositories\interface;


use App\Models\Post;
use App\Http\Request\StorePostRequest;
use App\Http\Request\UpdatePostRequest;

interface PostRepositoryInterface{

    public function all();

    // public function store(StorePostRequest $request);

    // public function show(Post $category);

    // public function update(Post $category ,UpdatePostRequest $request);

    // public function delete(Post $category);


}
