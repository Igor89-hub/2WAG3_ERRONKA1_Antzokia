<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LangileakEditatuController extends Controller
{
    /**
     * Langile bat editatzeko orria irekitzen du.
     */
    public function open(User $user)
    {
        return Inertia::render('langileakEditatu', compact('user'));
    }

    /**
     * Langilearen datuak eguneratzen ditu.
     */
    public function update(Request $request, User $user)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        //     'role' => ['required',new Enum(UserRole::cases())],
        // ]);

        
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
        ]);

        return redirect()->route('langileak')->with('success', 'Langilea eguneratua izan da.');
    }

    public function destroy(User $user)
    {
    $user->delete();

    return redirect()->route('langileak')->with('success', 'Langilea ezabatua izan da.');
    }
}

