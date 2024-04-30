<?php 


namespace App\Services\implementation;



use App\Http\Requests\StoreFeedbackRequest;
use App\Services\contract\ServiceClientInterface;
use App\Repositories\interface\ClientRepositoryInterface;


class ClientService implements ServiceClientInterface{

    public function __construct(public ClientRepositoryInterface $repository){

    }


    public function feedback(StoreFeedbackRequest $request)
    {
        return $this->repository->feedback($request);
    }
}

