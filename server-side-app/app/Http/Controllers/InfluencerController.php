<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Influencer;

class InfluencerController extends BaseApiController
{

    public function all(){
        
       $Influencers = Influencer::with('profileImage')->get();

        return $this->sendResponse(
    message:"all influecners",
    result: $Influencers
    
        );

    }
    public function show(Request $request){
       

        $validate_id = $request->validate([
            "influencer_id"=>"integer"
        ]);

         $Influencer = Influencer::with('client.profileImage')->findOrFail($validate_id);

        return $this->sendResponse(
    message:"show influecner",
    result: $Influencer
    
        );
    }

    public function getRandomInfluencers()
    {
        $influencers = Influencer::with('profileImage')->inRandomOrder()->limit(5)->get();

        return $this->sendResponse(
            message:"random influecners",
            result: $influencers
            
            );
    }


    
}
