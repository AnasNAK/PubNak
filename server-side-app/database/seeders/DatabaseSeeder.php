<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use App\Models\Post;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Category::factory(5)->create();

        Admin::factory()->create([
            'name' => 'Admin',
            'email' => 'Admin@Admin.com',
            'password' => 'admin',
            'role' => 'Admin'
        ]);

            Post::factory()->create([
                'title' => 'telecome',
                'content' => 'this content made by anas nak and that person is me ',
                'category_id' => 1

            ]);

    }
}
