<?php 


namespace App\Services\contract;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

interface CategoryServiceInterface{

    public function all();

    public function store(StoreCategoryRequest $request);

    public function show(Category $category);

    public function update(Category $category ,UpdateCategoryRequest $request);

    public function delete(Category $category);

    public function getCategoryStatistics();




}
