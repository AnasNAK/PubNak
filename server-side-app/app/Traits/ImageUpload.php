<?php

namespace App\Traits;
use Illuminate\Support\Str;

use App\Models\image;
use Illuminate\Support\Facades\Storage;

trait ImageUpload
{
    public function storeImg($image, $obj)
    {
        try {
            $imageName = $this->move($image);
    
            image::create([
                "path" => $imageName,
                "imageable_id" => $obj->id,
                "imageable_type" => get_class($obj)
            ]);
        } catch (\Exception $e) {
            throw new \RuntimeException("Error storing image: " . $e->getMessage());
        }
    }
    
    public function updateImg($image, object $obj)
    {
        $imageName = $this->move($image);
        $obj->profileImage()->update(["path" => $imageName]);
    }
    public function updateImgP($image, object $obj)
    {
        $imageName = $this->move($image);
        $obj->images()->update(["path" => $imageName]);
    }

    public function deleteImg(object $obj)
    {
        if ($obj->images !== null && $obj->images->isNotEmpty()) {
            foreach ($obj->images as $image) {
                Storage::delete('public/' . $image->path);
                $image->delete();
            }
        }
    }
    

    
    public function move($image)
    {
        $imageName = time() . "." . $image->extension();
        $image->storeAs('public/', $imageName);
        return $imageName;
    }
}

