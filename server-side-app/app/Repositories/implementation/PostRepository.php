<?php

namespace App\Repositories\Implementation;


use App\Models\Post;
use Illuminate\Support\Facades\Log;
use App\Models\image;
use App\Traits\getUserId;
use App\Models\Influencer;
use App\Traits\ImageUpload;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\StorePostRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Validation\UnauthorizedException;
use App\Repositories\interface\PostRepositoryInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PostRepository implements PostRepositoryInterface {

    use getUserId ,ImageUpload;


    public function all()
{
    return Post::with('category', 'images', 'client', 'client.profileImage','assigned_post')
                ->where('status', true)
                ->latest()
                ->get();
}
    public function allPsts()
{
    return Post::with('category', 'images', 'client', 'client.profileImage','assigned_post')
               ->latest()
                ->get();
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
                $imagePaths = [];
                foreach ($request->file('images') as $image) {
                    $imagePath = $this->storeImage($image);
                    $imagePaths[] = $imagePath;
    
                    image::create([
                        "path" => $imagePath,
                        "imageable_id" => $post->id,
                        "imageable_type" => Post::class
                    ]);
                }
                return response()->json([
                    'post' => $post,
                    'image_paths' => $imagePaths
                ]);
            } else {
                return response()->json("No images provided", 400);
            }
    
            return response()->json($post);
        } catch (\Exception $e) {
            throw new \RuntimeException("Error creating Post: " . $e->getMessage());
        }
    }
    
    
    private function storeImage($image)
    {
        $imageName = time() . "." . $image->extension();
        $image->storeAs('public/', $imageName); 
        return $imageName;
    }
    

    

    public function update(Request $request, Post $post)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string',
                'content' => 'required|string',
                'category_id' => 'required|integer',
            ]);
    
            $post->update($validatedData);
    
            if ($request->hasFile('images')) {
                $post->images()->delete();
                            
                foreach ($request->file('images') as $image) {
                    if ($image->isValid()) {
                        $imageName = $this->storeImage($image);
                        
                        image::create([
                            "path" => $imageName,
                            "imageable_id" => $post->id,
                            "imageable_type" => Post::class
                        ]);
                    }
                }
            }
    
            return response()->json(['message' => 'Post updated successfully', 'post' => $post], 200);
        } catch (\Exception $e) {
            Log::error('Error updating post', ['exception' => $e]);
            return response()->json(['error' => 'Failed to update post'], 500);
        }
    }


private function deleteImg(Post $post)
{
    foreach ($post->images as $image) {
        Storage::delete($image->path);
    }

    $post->images()->delete();
}

    




    public function delete(Post $post)
{
    $post = Post::findOrFail($post->id);
  

    $post->status = !$post->status;

    $post->save();

    return ['message' => 'Post status updated successfully'];
}


    public function MyPosts(Request $request )
    {

        $userId = $this->getUser( $request);

        $posts = Post::where('client_id', $userId)
        ->where('status', true)
        ->with('category', 'images')
        ->get();

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
    
        return $post;
    }
    public function myFav(Request $request)
    {
        $userId = $this->getUser($request);
    
        $influencer = Influencer::find($userId);
        $favPosts = $influencer->post->load('client.profileImage','category','images');
    
        return $favPosts;
    }


    public function Statistics(){

        $statistics = Post::selectRaw('DATE(created_at) as date, COUNT(*) as count')
        ->groupBy('date')
        ->get();

    return $statistics;
        

    }
    


public function assigned(Post $post , Request $request)
{
    $request->validate([
        'assigned' => 'required|exists:influencers,id',
    ]);

    try {
        $post->update([
            'assigned' => $request->assigned
        ]);

        return response()->json(['message' => 'Post assigned successfully', 'post' => $post], 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to assign post'], 500);
    }
}


}
