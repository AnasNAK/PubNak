<?php

namespace App\Repositories\implementation;

use App\Models\Category;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Validation\UnauthorizedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\interface\CategoryRepositoryInterface;

// use App\Traits\getUserId;

class CategoryRepository implements CategoryRepositoryInterface
{
    // use getUserId;

    public function all()
    {
        return Category::all();
    }

 
    public function store(StoreCategoryRequest $request)
    {  
        
    //    $userId = $this->getUser($request);

      
        try {
            $category = Category::create($request->validated());
            return $category;
        } catch (\Exception $e) {
            throw new \RuntimeException("Error creating Category: " . $e->getMessage());
        }
    }

    public function show(Category $category)
    {
        try {
            return $category;
        }catch(ModelNotFoundException $e) {
            throw new \RuntimeException("Error fetching Category: " . $e->getMessage());
        }
    }

    public function update( Category $category ,UpdateCategoryRequest $request )
    {
        try{
            $category->update($request->validated());
            return $category;

        }catch(ModelNotFoundException $e){
            throw new \RuntimeException("Category not found: " . $e->getMessage());
        }
        catch(UnauthorizedException $e){
            throw new \RuntimeException("Validation error: " . $e->getMessage());
        }
        
    }

    public function delete(Category $category)
    {
        try{

            return $category->delete();
        }catch(ModelNotFoundException $e){
            throw new \RuntimeException("Error fetching Category: " . $e->getMessage());

        }
      
    }
}
