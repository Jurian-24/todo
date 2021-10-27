<?php

use App\Http\Controllers\TodoController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('todo-list', [TodoController::class, 'index']);
Route::post('todo-add', [TodoController::class, 'store']);
Route::post('todo-delete/{todo}', [TodoController::class, 'delete']);
Route::post('todo-complete/{todo}', [TodoController::class, 'update']);

//sanctum
Route::middleware('auth:sanctum')->get('/user', [RouteController::class, 'user']);