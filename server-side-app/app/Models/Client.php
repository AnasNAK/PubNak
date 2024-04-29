<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends User
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


    public function influencer(){
        return $this->belongsToMany(Influencer::class ,'client_influencer_feedback');
    }
}
