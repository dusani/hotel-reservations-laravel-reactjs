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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List Hotels
Route::get('/hotels', 'HotelController@index');

// List Single Hotel with every available room
Route::get('/hotel/{hotel}', 'HotelController@showHotel');

// Show single room
Route::get('/hotel/{hotel}/{room}', 'HotelController@showRoom');

Route::post('/reservation', 'CustomerReservationController@store');