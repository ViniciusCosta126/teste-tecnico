<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayoutController;

Route::get('/layout', [LayoutController::class, 'getLayout']);
Route::post('/layout', [LayoutController::class, 'storeLayout']);

