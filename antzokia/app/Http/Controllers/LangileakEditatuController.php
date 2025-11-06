<?php

namespace App\Http\Controllers;

use App\Models\Langilea;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LangileakEditatuController extends Controller
{
    /**
     * Langile bat editatzeko orria irekitzen du.
     */
    public function open(Langilea $langilea)
    {
        return Inertia::render('langileakEditatu', [
            'langilea' => $langilea->only(
                'id_langilea',
                'izena',
                'abizenak',
                'emaila',
                'telefonoa',
                'baimen_mota'
            )
        ]);
    }

    /**
     * Langilearen datuak eguneratzen ditu.
     */
    public function update(Request $request, Langilea $langilea)
    {
        $request->validate([
            'izena' => 'required|string|max:255',
            'abizenak' => 'required|string|max:255',
            'emaila' => 'required|email|unique:langileak,emaila,' . $langilea->id_langilea . ',id_langilea',
            'telefonoa' => 'nullable|string|max:20',
            'pasahitza' => 'nullable|string|min:6',
            'baimen_mota' => 'required|string|max:100',
        ]);

        $data = $request->only(['izena', 'abizenak', 'emaila', 'telefonoa', 'baimen_mota']);

        if ($request->filled('pasahitza')) {
            $data['pasahitza'] = bcrypt($request->pasahitza);
        }

        $langilea->update($data);

        return redirect()->route('langileak')->with('success', 'Langilea eguneratua izan da.');
    }

    public function destroy(Langilea $langilea)
    {
    $langilea->delete();

    return redirect()->route('langileak')->with('success', 'Langilea ezabatua izan da.');
    }
}

