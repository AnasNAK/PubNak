<?php 


namespace App\Services\contract;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

interface PostServiceInterface {


    public function all();

    public function store(StorePostRequest $request);

    public function show(Post $post);

    public function update(Post $post ,UpdatePostRequest $request);

    public function delete(Post $post);

    public function MyPosts(Request $request);

    public function addFav( Post $post ,Request $request);

    public function myFav(Request $request);



}