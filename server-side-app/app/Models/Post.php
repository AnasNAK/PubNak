<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content', 'category_id', 'client_id','assigned'];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->morphMany(image::class , 'imageable');
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
    public function assigned_post()
    {
        return $this->belongsTo(Influencer::class ,'assigned');
    }

    public function influencer()
    {
        return $this->belongsToMany(Influencer::class, 'influencer_post');
    }
}
