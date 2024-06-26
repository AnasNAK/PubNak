<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Implementation\UserService;
use App\Services\Implementation\PostService;
use App\Services\contract\UserServiceInterface;
use App\Services\Implementation\CategoryService;
use App\Services\contract\CategoryServiceInterface;
use App\Services\contract\PostServiceInterface;
use App\Services\contract\ServiceClientInterface;
use App\Services\implementation\ClientService;



class ServiceServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // app()->bind(UserServiceInterface::class, UserService::class);
        app()->bind(CategoryServiceInterface::class, CategoryService::class);
        app()->bind(PostServiceInterface::class, PostService::class);
        app()->bind(ServiceClientInterface::class, ClientService::class);

    }
}       
