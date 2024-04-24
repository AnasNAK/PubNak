<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Implementation\UserService;
use App\Services\contract\UserServiceInterface;
use App\Services\Implementation\CategoryService;
use App\Services\contract\CategoryServiceInterface;



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

    }
}
