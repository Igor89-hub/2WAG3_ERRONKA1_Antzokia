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
use App\Http\Controllers\DatuPertsonalakControler;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ErosketaController;

/*Route::get('/', function () {
    return Inertia::render('hasiera');
})->name('home');*/

/*Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});*/

//PAGINAS PUBLICAS
Route::get('/', [HasieraOrriaController::class, 'ekitaldiak'])->name('hasiera');
Route::get('/guri_buruz', [GuriBuruzController::class, 'open'])->name('guri_buruz');
Route::get('/ekitaldiakUsers', [EkitaldiakUsersController::class, 'open'])->name('ekitaldiakUsers');
Route::get('/ekitaldiakUserXehetasunak/{id}', [EkitaldiakUserXehetasunakController::class, 'getEkitaldiaById'])->name('ekitaldia.xehetasunak');


//LOGIN Y REGISTER
//PONEMOS TODAS LAS OPERACIONES DEL LOGIN DENTRO DE UN GRUPO (FUNCIONARA COMO SIEMPRE PERO ASI QUEDA MUCHO MAS LIMPIO)
Route::controller(LoginController::class)->group(function () {
    Route::get('/Users/login', 'openLogin')->name('login');
    Route::post('/Users/login', 'login')->name('login.store');
    Route::post('/logout', 'logout')->name('logout');
});

Route::controller(RegisterController::class)->group(function () {
    Route::get('/Users/register', [RegisterController::class, 'openRegister'])->name('register');
    Route::post('/Users/register', [RegisterController::class, 'store'])->name('register.store');
});



// ========================================
// RUTAS QUE REQUIEREN AUTENTICACIÓN
// ========================================

Route::middleware('auth')->group(function () {


    // SOLO ADMIN Y ADMIN NAGUSIA pueden gestionar ekitaldiak
    Route::middleware('can:manage-ekitaldiak')->group(function () {
        Route::get('/ekitaldiak', [EkitaldiakController::class, 'getAllEkitaldiak'])->name('ekitaldiak');
        Route::put('/ekitaldiak/{ekitaldia}', [EkitaldiakController::class, 'update'])->name('ekitaldiak.update');
        Route::post('/ekitaldiak', [EkitaldiakController::class, 'store'])->name('ekitaldiak.store');
        Route::delete('/ekitaldiak/{ekitaldia}', [EkitaldiakController::class, 'destroy'])->name('ekitaldia.destroy');
        Route::get('/ekitaldiakSortu', [EkitaldiBerriaController::class, 'open'])->name('ekitaldiakSortu');
        Route::get('/ekitaldiakEditatu/{ekitaldia}', [EkitaldiakEditatuController::class, 'open'])->name('ekitaldiakEditatu');
    });

    //SOLO LOS USUARIOS 'adminNagusia' puede gestionar los langileak

    Route::middleware('can:manage-users')->group(function () {
        Route::get('/langileak', [LangileakController::class, 'openLangileak'])->name('langileak');
        Route::get('/langileakSortu', action: [LangileBerriaController::class, 'open'])->name('langileakSortu');
        Route::get('/langileakEditatu/{user}', [LangileakEditatuController::class, 'open'])->name('langileakEditatu');
        Route::post('/langileak', [LangileakController::class, 'store'])->name('langileak.store');
        Route::put('/langileakEditatu/{user}', [LangileakEditatuController::class, 'update'])->name('langileakEditatu.update');
        Route::delete('/langileakEditatu/{user}', [LangileakEditatuController::class, 'destroy'])->name('langileakEditatu.destroy');
    });
});



Route::get('/erosketa/{id_ekitaldia}', [ErosketaController::class, 'show'])
    ->name('erosketa.show');

Route::post('/erosketa', [ErosketaController::class, 'purchase'])
    ->name('erosketa.purchase');

Route::get('/DatuPertsonalak', [DatuPertsonalakControler::class, 'open'])
    ->name('DatuPertsonalak');

Route::post('/DatuPertsonalak', [DatuPertsonalakControler::class, 'store'])
    ->name('DatuPertsonalak.store');
    Route::get('/ekitaldiak/{id}', [EkitaldiakController::class, 'show'])
    ->name('ekitaldiak.show');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
