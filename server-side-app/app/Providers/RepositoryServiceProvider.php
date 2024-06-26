<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Implementation\UserRepository;
use App\Repositories\implementation\CategoryRepository;
use App\Repositories\Implementation\PostRepository;
use App\Repositories\interface\UserRepositoryInterface;
use App\Repositories\interface\CategoryRepositoryInterface;
use App\Repositories\interface\PostRepositoryInterface;
use App\Repositories\implementation\ClientRepository;
use App\Repositories\interface\ClientRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
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
        app()->bind(CategoryRepositoryInterface::class,CategoryRepository::class);
        app()->bind(PostRepositoryInterface::class,PostRepository::class);
        app()->bind(ClientRepositoryInterface::class,ClientRepository::class);
    }
}
    