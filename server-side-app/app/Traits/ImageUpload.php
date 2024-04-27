<?php

namespace App\Traits;
use Illuminate\Support\Str;

use App\Models\Image;
use Illuminate\Support\Facades\Storage;

trait ImageUpload
{
    public function storeImg($image, object $obj)
    {
        // dd($image);

        $imageName = $this->move($image);
        Image::create([
            "path" => $imageName,
            "imageable_id" => $obj->id,
            "imageable_type" => get_class($obj)
        ]);
    }
    public function updateImg($image, object $obj)
    {
        $imageName = $this->move($image);
        $obj->image()->update(["path" => $imageName]);
    }

    public function deleteImg(object $obj)
    {
        if ($obj->image) {
            Storage::delete('public/' . $obj->image->path);
            // Delete image record from database
            $obj->image->delete();
        }
    }
    public function move($image)
    {
        $imageName = time() . "." . $image->extension();
        $image->storeAs('public/', $imageName);
        return $imageName;
    }
}

