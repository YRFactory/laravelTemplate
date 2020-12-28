<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//API入力サンプル
Route::get('/ping',function(){
    return response()->json(['message'=>'ping'],200);
});

//APIのサンプルを入力します。必要になる情報を入力します。
Route::get('/sample',function(){
    return response()->json(['message'=>'sample'],200);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
