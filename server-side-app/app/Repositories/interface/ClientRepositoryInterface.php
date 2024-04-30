<?php 


namespace App\Repositories\interface;

use App\Http\Requests\StoreFeedbackRequest;

interface ClientRepositoryInterface {


    public function feedback(StoreFeedbackRequest $request);

}