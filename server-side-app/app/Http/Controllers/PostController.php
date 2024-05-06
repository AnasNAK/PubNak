<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Services\contract\PostServiceInterface;

class PostController extends BaseApiController
{
public function __construct(public PostServiceInterface $service){

}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        return $this->sendResponse(
            message:"Posts lists",
            result: $this->service->all()
        );
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
         $post = $this->service->store($request);

         return $this->sendResponse(
            message: "Post created successfully",
            result: $post,
            code:201
         );
    }

    // /**
    //  * Display the specified resource.
    //  */
    public function show(Post $post)
    {
      
        return $this->sendResponse(
            message: "Post is listed with success",
            result: $post,
        );
    }


    // /**
    //  * Update the specified resource in storage.
    //  */
    public function update( Request $request ,Post $post )
    {
        // dd($request);
      
        $post = $this->service->update($request,$post );

        return $this->sendResponse(
            message:"Post updated successsfully",
            result:$post,
            code:202
        );
        
    }   

    // /**
    //  * Remove the specified resource from storage.
    //  */
        public function destroy(Post $post)
        {
            return $this->sendResponse(
                message:"Post deleted with success",
                result: $this->service->delete($post)
            );
        

        }

        public function MyPosts(Request $request){
          

            return $this->sendResponse(
                message:"listed my posts with success",
                result: $this->service->MyPosts($request)

            );
        }


        public function addFav( Post $post ,Request $request){
        return $this->sendResponse(
            message:"added to list fav with success",
            result: $this->service->addFav($post,$request)
        );

        }
        public function myFav(Request $request){
        return $this->sendResponse(
            message:" list myfav with success",
            result: $this->service->myFav($request)
        );

        }


        public function postStatistics(){

            $Statistics = $this->service->Statistics();
            return $this->sendResponse(

                message: "Statistics received successfully",
                result: $Statistics
            );
        }
        public function assigned(Post $post ,Request $request){

            $post = $this->service->assigned($post,$request );

            return $this->sendResponse(
                message:"Post updated successsfully",
                result:$post,
                code:202
            );
        }
        public function allPsts(){

            return $this->sendResponse(
                message:"Posts lists",
                result: $this->service->allPsts()
            );
        }
}
