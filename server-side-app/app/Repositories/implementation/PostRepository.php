<?php

namespace App\Repositories\Implementation;

use App\Models\Post;
use App\Traits\getUserId;
use App\Models\Influencer;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Validation\UnauthorizedException;
use App\Repositories\interface\PostRepositoryInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PostRepository implements PostRepositoryInterface {

    use getUserId ,ImageUpload;


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
               $userId = $this->getUser($request);
          
            try {
                $validatedData = $request->validated();
               $validatedData['client_id'] = $userId;
           
                $post = Post::create($validatedData);

                if ($request->hasFile('images')) {
                    foreach ($request->file('images') as $image) {
                        $this->storeImg($image, $post);
                    }
                }
                
                return  $post;
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

    public function MyPosts(Request $request )
    {

        $userId = $this->getUser( $request);

        $posts = Post::where('client_id',$userId)->with('category')->get();


        return $posts;
    }



    public function addFav(Post $post, Request $request)
    {
        $userId = $this->getUser($request);
    
        $influencer = Influencer::find($userId);
    
        if (!$influencer) {
            return response()->json(['error' => 'Influencer not found'], 404);
        }
    
        $influencer->post()->toggle($post->id);
    
        return response()->json(['message' => 'Favorite status toggled successfully']);
    }
    public function myFav(Request $request)
    {
        $userId = $this->getUser($request);
    
        $influencer = Influencer::find($userId);
        $favPosts = $influencer->post->load('client','category');
    
        return $favPosts;
    }

}
