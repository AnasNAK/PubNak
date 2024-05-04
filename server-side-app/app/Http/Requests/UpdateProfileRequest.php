<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            "name" => "required|string",
            "email" => "email",
            "password" => "required|string|min:6",
            "image" => "image|mimes:jpg,png,gif",
            

        ];
    }
}
