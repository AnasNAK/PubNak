<?php


namespace App\Repositories\interface;


use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;

interface PostRepositoryInterface{

    public function all();

    public function allPsts();

    public function store(StorePostRequest $request);

    public function show(Post $post);

    public function update(Request $request, Post $post );

    public function delete(Post $post);

    public function MyPosts(Request $request);

    public function addFav( Post $post ,Request $request);

    public function myFav(Request $request);

    public function Statistics();

    public function assigned(Post $post , Request $request);



}
