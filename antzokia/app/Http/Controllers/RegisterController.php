<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Enums\LangileRole;
use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function openRegister(): Response {
        return Inertia::render('Users/register');
    }


    public function store(Request $request)
    {
        // Validar los datos
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Crear el usuario
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => LangileRole::User, // Rol por defecto
        ]);

         // Redirigir a la página principal
        return redirect()->route('hasiera')->with('success', 'Erabiltzailea ondo sortu da!');
    }
}
