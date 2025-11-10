<?php

use App\Http\Controllers\EkitaldiakController;
use App\Http\Controllers\EkitaldiakEditatuController;
use App\Http\Controllers\EkitaldiakUsersController;
use App\Http\Controllers\EkitaldiakUserXehetasunakController;
use App\Http\Controllers\EkitaldiBerriaController;
use App\Http\Controllers\HasieraOrriaController;
use App\Http\Controllers\GuriBuruzController;
use App\Http\Controllers\LangileakController;
use App\Http\Controllers\LangileakEditatuController;
use App\Http\Controllers\LangileBerriaController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
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
Route::get('/ekitaldiak', [EkitaldiakController::class, 'getAllEkitaldiak'])->name('ekitaldiak');
Route::get('/guri_buruz', [GuriBuruzController::class, 'open'])->name('guri_buruz');
Route::get('/langileak', [LangileakController::class, 'openLangileak'])->name('langileak');
Route::get('/langileakSortu', action: [LangileBerriaController::class, 'open'])->name('langileakSortu');
Route::get('/langileakEditatu/{user}', [LangileakEditatuController::class, 'open'])->name('langileakEditatu');
Route::get('/ekitaldiakSortu', [EkitaldiBerriaController::class, 'open'])->name('ekitaldiakSortu');
//TIENES QUE PONER EXACTAMENTE EL MISMO NOMBRE QUE EN LA FUNCION DEL CONTROLADOR
Route::get('/ekitaldiakEditatu/{ekitaldia}', [EkitaldiakEditatuController::class, 'open'])->name('ekitaldiakEditatu');
Route::get('/Users/login', [LoginController::class, 'openLogin'])->name('login');
Route::get('/Users/register', [RegisterController::class, 'openRegister'])->name('register');

Route::get('/ekitaldiakUsers', [EkitaldiakUsersController::class, 'open'])->name('ekitaldiakUsers');
Route::get('/ekitaldiakUserXehetasunak/{id}', [EkitaldiakUserXehetasunakController::class, 'getEkitaldiaById'])->name('ekitaldia.xehetasunak');
//POST KONTSULTAK
Route::post('/ekitaldiak', [EkitaldiakController::class, 'store'])->name('ekitaldiak.store');
Route::delete('/ekitaldiak/{ekitaldia}', [EkitaldiakController::class, 'destroy'])->name('ekitaldia.destroy');
//PUT KONTSULTAK
Route::put('/ekitaldiak/{ekitaldia}', [EkitaldiakController::class, 'update'])->name('ekitaldiak.update');

Route::get('/ekitaldi_sortu', function () {
    return Inertia::render('ekitaldi_sortu');
})->name('ekitaldi_sortu');
Route::post('/langileak', [LangileakController::class, 'store'])->name('langileak.store');

//PUT 
Route::put('/langileakEditatu/{user}', [LangileakEditatuController::class, 'update'])->name('langileakEditatu.update');

Route::delete('/langileakEditatu/{user}', [LangileakEditatuController::class, 'destroy'])->name('langileakEditatu.destroy');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
