<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\EtudiantController;
Route::apiResource('etudiant',EtudiantController::class);

use App\Http\Controllers\SoireeController;
Route::apiResource('soiree',SoireeController::class);

use App\Http\Controllers\StockGoodieController;
Route::apiResource('stockGoodie',StockGoodieController::class);

use App\Http\Controllers\AttributionController;
Route::apiResource('attribution',AttributionController::class);

use App\Http\Controllers\ReservationController;
Route::apiResource('reservation',ReservationController::class);
