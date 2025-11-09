<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function openLogin(): Response
    {
        return Inertia::render('Users/login');
    }

    public function login(Request $request): RedirectResponse
    {
        //VALIDAMOS LOS DATOS
        $credenciales = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        //INTENTAMOS AUTENTICAR
        if (Auth::attempt($credenciales, $request->boolean('remember'))) {
            //regeneramos la sesion

            $request->session()->regenerate();

            // Redirigir a la página principal
            return redirect()->intended('/');
        }

        throw ValidationException::withMessages([
            'email' => 'Kredentziala ez dira zuzenak.'
        ]);
    }

    public function logout(Request $request):RedirectResponse{

        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}

