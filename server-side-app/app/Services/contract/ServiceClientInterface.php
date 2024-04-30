<?php 

namespace App\Services\contract;

use App\Models\Client;
use App\Http\Requests\StoreFeedbackRequest;

interface ServiceClientInterface {

    public function feedback(StoreFeedbackRequest $request);
}

