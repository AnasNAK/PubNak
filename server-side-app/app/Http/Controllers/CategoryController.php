<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\contract\CategoryServiceInterface;
use Illuminate\Http\Request;


class CategoryController extends BaseApiController
{
public function __construct(public CategoryServiceInterface $service){
    

}


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
   
        return $this->sendResponse(
            message: "category list",
            result: $this->service->all()
        );
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {


      $category =  $this->service->store($request);

      return $this->sendResponse(
        message: "category created successfully",
        result: $category,
        code:201 
    );
      
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return $this->sendResponse(
            message: "category display success",
            result: $this->service->show($category),
            code:201 
        );
        
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Category $category ,UpdateCategoryRequest $request )
    {
       $category =  $this->service->update($category, $request );

       return $this->sendResponse(
        message: "Category updated successfully",
        result: $category ,
        code: 202
       );

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        return $this->sendResponse(
            message: "category deleted successfully",
            result: $this->service->delete($category),
            code:202 
        );
        
    }
}
