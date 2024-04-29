<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            "name" => "required|string",
            "email" => "required|string",
            "content" => "required|string",
        ];
    }
}
