<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use App\Models\Post;
use App\Models\Category;
use App\Models\Client;
use App\Models\Influencer;
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

        Client::factory()->create([
            'name' => 'Client',
            'email' => 'client@client.com',
            'password' => 'client',
            'role' => 'Client'
        ]);
        Admin::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => 'admin',
            'role' => 'Admin'
        ]);
        Influencer::factory()->create([
            'name' => 'Influencer',
            'email' => 'influencer@influencer.com',
            'password' => 'influencer',
            'role' => 'Influencer'
        ]);

            // Post::factory()->create([
            //     'title' => 'telecome',
            //     'content' => 'this content made by anas nak and that person is me ',
            //     'category_id' => 2

            // ]);

    }
}
