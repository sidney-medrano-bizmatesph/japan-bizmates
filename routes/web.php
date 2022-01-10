<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlacesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get("/{any}", function(){
    return view('index');
})->where('any', '.*');

Route::post("/get-places", [PlacesController::class, "all"]);
Route::post("/get-place", [PlacesController::class, "get"]);
Route::post("/get-weather", [PlacesController::class, "getWeather"]);