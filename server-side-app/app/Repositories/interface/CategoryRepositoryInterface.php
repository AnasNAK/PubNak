<?php 

namespace App\Repositories\interface;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;

interface CategoryRepositoryInterface {

    public function all();

    public function store(StoreCategoryRequest $request);

    public function show(Category $category);

    public function update( Category $category , UpdateCategoryRequest $request );

    public function delete(Category $category);


}