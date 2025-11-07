<?php

namespace App\Http\Controllers;

use App\Enums\LangileRole;
use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Langilea;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Enum;

class LangileakController extends Controller
{
    /**
     * Langileen orria irekitzen du eta langile guztiak erakusten ditu.
     */
    public function openLangileak()
    {
        $langileGuztiak = User::all();

        return Inertia::render('langileak', [
            'langileGuztiak' => $langileGuztiak
        ]);
    }

    /**
     * Langile berri bat sortzeko (POST /langileak)
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required',new Enum(LangileRole::cases())],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'role' => $request->role,
        ]);

        return redirect()->route('langileak')->with('success', 'Langilea ondo sortu da!');
    }

    /**
     * Langile bat ezabatzen du (DELETE /langileak/{id})
     */
    public function destroy($id)
    {
        Langilea::where('id_langilea', $id)->delete();

        return redirect()->route('langileak')->with('success', 'Langilea ezabatua izan da.');
    }
}

