<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::post('me', 'AuthController@me');

Route::group(['prefix' => 'expert', 'middleware' => 'role:expert|admin'], function (){
    Route::get('suggestion', 'SuggestionController@index');
    Route::post('suggestion', 'SuggestionController@update');
});

Route::group(['prefix' => 'farmer', 'middleware' => 'role:user|admin'], function (){
    Route::get('image', 'PlantImageController@index');
    Route::post('image', 'PlantImageController@store');

    Route::get('image/analyse', 'PlantImageController@show');
    
    Route::get('report', 'ReportController@index');
});