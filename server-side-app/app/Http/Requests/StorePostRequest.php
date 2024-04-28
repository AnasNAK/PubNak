<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required',
            'client_id' => 'required',
            // 'images'=> 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ];
    }
}
