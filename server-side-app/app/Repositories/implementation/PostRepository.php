<?php

namespace App\Repositories\Implementation;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Repositories\interface\PostRepositoryInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\UnauthorizedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Traits\ImageUpload;

class PostRepository implements PostRepositoryInterface {


    use ImageUpload;

    public function all(){

        return Post::with('category' ,'images','client')->latest()->get();
    }

    public function show(Post $post){

        try {
            return $post;
        }catch(ModelNotFoundException $e) {
            throw new \RuntimeException("Error fetching post: " . $e->getMessage());
        }
    }


    public function store(StorePostRequest $request)
    {
            try {
                $post = Post::create($request->validated());

                if ($request->hasFile('images')) {
                    foreach ($request->file('images') as $image) {
                        $this->storeImg($image, $post);
                    }
                }
                
                return $post;
            } catch (\Exception $e) {
                throw new \RuntimeException("Error creating Post: " . $e->getMessage());
            }
     }

     public function update( Post $post ,UpdatePostRequest $request)
    {
        try {
  
            $post = Post::findOrFail($post->id);

            $post->update($request->validated());

            if ($request->hasFile('images')) {

                $this->deleteImg($post);

                foreach ($request->file('images') as $image) {
                    $this->storeImg($image, $post);
                }
            }

            return $post;
        } catch (\Exception $e) {
            throw new \RuntimeException("Error updating Post: " . $e->getMessage());
        }
    }




    public function delete(Post $post)
    {
        $post = Post::findOrFail($post->id);

        $post->status = false;

        $post->save();

        return ['message' => 'Post status updated successfully'];
    }




}
