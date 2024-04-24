<?php

namespace App\Services\Implementation;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Services\contract\CategoryServiceInterface;
use App\Repositories\interface\CategoryRepositoryInterface;


class CategoryService implements CategoryServiceInterface {

    public function __construct(public CategoryRepositoryInterface $Repository){

    }

    public function all(){
        return $this->Repository->all();
    }

    public function store(StoreCategoryRequest $request){
    
       return $this->Repository->store($request);
    }

    public function show(Category $category){
        return $this->Repository->show($category);

    }

    public function update(Category $category, UpdateCategoryRequest $request)
    {
        return $this->Repository->update($category, $request);
    }
    public function delete(Category $category){
        return $this->Repository->delete($category);
    }



}