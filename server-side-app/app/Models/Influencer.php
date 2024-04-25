<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Influencer extends User
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',

    ];


    public function profileImage()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function post()
    {
        return $this->belongsToMany(Post::class, 'influencer_post');
    }
}
