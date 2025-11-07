<?php

namespace App\Http\Controllers;

use App\Models\Ekitaldia;
use App\Models\EkitaldiEserleku;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ErosketaController extends Controller
{
    public function show(int $id_ekitaldia)
    {
        $ekitaldia = Ekitaldia::findOrFail($id_ekitaldia);

        // Eserlekuak + estado (hartuta)
        $eserlekuak = DB::table('ekitaldi_eserleku as ee')
            ->join('eserleku as e', 'e.id_eserleku', '=', 'ee.id_eserleku')
            ->where('ee.id_ekitaldia', $id_ekitaldia)
            ->orderBy('e.id_eserleku')
            ->select('e.id_eserleku', 'e.deskribapena', 'ee.hartuta')
            ->get();

        return Inertia::render('SarrerakErosketa', [
            'ekitaldia'   => [
                'id' => $ekitaldia->id_ekitaldia,
                'izena' => $ekitaldia->izena,
                'hasiera_data' => $ekitaldia->hasiera_data?->format('Y-m-d\TH:i'),
                'bukaera_data' => $ekitaldia->bukaera_data?->format('Y-m-d\TH:i'),
            ],
            'eserlekuak'  => $eserlekuak,
        ]);
    }

    public function purchase(Request $request)
    {
        $data = $request->validate([
            'id_ekitaldia' => ['required','integer','exists:ekitaldiak,id_ekitaldia'],
            'id_eserleku'  => ['required','integer','exists:eserleku,id_eserleku'],
            'data_ordua'   => ['required','date'], // desde el picker
        ]);

        // Transacción + lock optimista para evitar doble venta
        return DB::transaction(function () use ($data) {
            $updated = DB::table('ekitaldi_eserleku')
                ->where('id_ekitaldia', $data['id_ekitaldia'])
                ->where('id_eserleku',  $data['id_eserleku'])
                ->where(function($q){ $q->whereNull('hartuta')->orWhere('hartuta', false); })
                ->update(['hartuta' => true]);

            if ($updated === 0) {
                return back()->withErrors([
                    'global' => 'Eserleku hori dagoeneko hartuta dago.',
                ]);
            }

            // Aquí podrías insertar en 'ikusi' o crear ticket real si quieres.
            // DB::table('ikusi')->insert([...]);

            return redirect()
                ->route('erosketa.show', $data['id_ekitaldia'])
                ->with('success', 'Erosketa ondo burutu da!');
        });
    }
    
}
