<?php 


namespace App\Repositories\implementation;

use App\Models\Client;
use App\Traits\getUserId;
use App\Models\Influencer;
use App\Http\Requests\StoreFeedbackRequest;
use App\Repositories\interface\ClientRepositoryInterface;



class ClientRepository implements ClientRepositoryInterface{

    use getUserId;

    public function feedback(StoreFeedbackRequest $request)
    {
    $clientId = $this->getUser($request);
    
    $influencerId = $request->influencer_id; 

    $influencer = Influencer::findOrFail($influencerId);

    if ($influencer->client()->where('client_id', $clientId)->exists()) {
        return response()->json(['error' => 'You have already given feedback to this influencer.'], 400);
    }

    $influencer->client()->attach($clientId, [
        'comment' => $request->comment,
        'rating' => $request->rating,
    ]);

    return response()->json(['message' => 'Feedback added successfully'], 200);


    }

}