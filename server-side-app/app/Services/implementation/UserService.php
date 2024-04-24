<?php 



namespace App\Services\Implementation;


use App\Models\User;
use App\Services\contract\UserServiceInterface;
use App\Repositories\interface\UserRepositoryInterface ;


class UserService implements UserServiceInterface 
{
    public function __construct(public UserRepositoryInterface $userRepository)
    {

    }

    public function all(){

        return $this->userRepository->all();
    }

    // public function show(User $user)
    // {
    //     return new $this->userRepository->show($user);
    // }

    // public function store(User $user)
    // {
    //     return new $this->userRepository->store($user);
    // }

    // public function update(User $user)
    // {
    //     return $this->userRepository->update($user);
    // }

    // public function delete(User $user)
    // {
    //     return $this->userRepository->delete($user);
    // }
}