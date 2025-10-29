<?php

use App\Http\Controllers\HasieraOrriaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('hasiera');
})->name('home');*/

/*Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});*/

Route::get('/', [HasieraOrriaController::class, 'ekitaldiak'])->name('hasiera');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
