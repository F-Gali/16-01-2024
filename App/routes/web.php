<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    if(Auth::check())
        return redirect()->route('perfil');
    else
        return redirect()->route('login');
});

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [ProfileController::class, 'perfil'])->name('perfil');
});

require __DIR__.'/auth.php';
