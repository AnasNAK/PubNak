<?php 


namespace App\Services\contract;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

interface PostServiceInterface {

    
    public function all();

    public function store(StorePostRequest $request);

    public function show(Post $category);

    public function update(Post $category ,UpdatePostRequest $request);

    public function delete(Post $category);


}