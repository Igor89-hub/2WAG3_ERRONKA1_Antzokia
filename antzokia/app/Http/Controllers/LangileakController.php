<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Langilea;

class LangileakController extends Controller
{
    /**
     * Langileen orria irekitzen du eta langile guztiak erakusten ditu.
     */
    public function openLangileak()
    {
        $langileGuztiak = DB::table('langileak')->get();

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
            'izena' => 'required|string|max:255',
            'abizenak' => 'required|string|max:255',
            'emaila' => 'required|email|unique:langileak,emaila',
            'telefonoa' => 'nullable|string|max:20',
            'pasahitza' => 'required|string|min:6',
            'baimen_mota' => 'required|string|max:100',
        ]);

        // pasahitza enkriptatu
        $data = $request->only(['izena', 'abizenak', 'emaila', 'telefonoa', 'baimen_mota']);
        $data['pasahitza'] = bcrypt($request->pasahitza);

        Langilea::create($data);

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

