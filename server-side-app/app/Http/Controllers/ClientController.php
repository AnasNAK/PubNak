<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreFeedbackRequest;
use App\Services\contract\ServiceClientInterface;

class ClientController extends BaseApiController
{
   public function __construct(public ServiceClientInterface $service)
   {
   }

   public function feedback(StoreFeedbackRequest $request){

    $feedback =  $this->service->feedback($request);

    return $this->sendResponse(
message:"fedback setting with success",
result: $feedback

    );
   }

}
