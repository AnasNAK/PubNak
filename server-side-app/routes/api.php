<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\InfluencerController;
use App\Http\Middleware\Cors;

Route::post('contact',[ContactController::class,'contactUs']);
Route::post('rmContact/{contact}',[ContactController::class,'delete']);


Route::get('allContact',[ContactController::class,'all']);



Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('users', [AuthController::class, 'users']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('UpdateProfileClient', [AuthController::class, 'UpdateProfileClient']);
    Route::post('UpdateProfileInfluencer', [AuthController::class, 'UpdateProfileInfluencer']);
    Route::post('FindMe', [AuthController::class, 'FindMe']);

});


Route::apiResource('category',CategoryController::class);
Route::apiResource('post',PostController::class);
Route::get('allPsts',[PostController::class ,'allPsts']);
Route::get('myPosts',[PostController::class, 'MyPosts']);
Route::post('addFav/{post}', [PostController::class, 'addFav']);
Route::get('myFav',[PostController::class, 'myFav']);


Route ::post('feedback',[ClientController::class, 'feedback']);


Route::get('postStatistics',[PostController::class, 'postStatistics']);

Route::patch('assignPost/{post}',[PostController::class, 'assigned']);

Route::get('CatStatistics',[CategoryController::class, 'getCategoryStatistics']);

Route::get('influencers',[InfluencerController::class, 'all' ]);

Route::get('getRandomInfluencers',[InfluencerController::class, 'getRandomInfluencers' ]);

Route::post('show',[InfluencerController::class, 'show' ]);

