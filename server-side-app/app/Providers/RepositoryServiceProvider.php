<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\implementation\UserRepository;
use App\Repositories\implementation\CategoryRepository;
use App\Repositories\implementation\PostRepository;
use App\Repositories\interface\UserRepositoryInterface;
use App\Repositories\interface\CategoryRepositoryInterface;
use App\Repositories\interface\PostRepositoryInterface;

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
    }
}
