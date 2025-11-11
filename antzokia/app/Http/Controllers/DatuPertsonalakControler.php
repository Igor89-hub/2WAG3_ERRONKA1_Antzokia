<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\ErosketaConfirmacion;
use App\Models\Ekitaldia;

class DatuPertsonalakControler extends Controller
{
    public function open(Request $request)
    {
        return Inertia::render('DatuPertsonalak', [
            'compra' => $request->session()->get('compra'),
        ]);
    }

    public function store(Request $request)
    {

        \Log::info('===== INICIO STORE =====');
        \Log::info('Datos recibidos:', $request->all());
        
        $data = $request->validate([
            'izena'           => ['required','string','max:255'],
            'abizenak'        => ['required','string','max:255'],
            'telefonoa'       => ['required','string','max:30'],
            'posta_kodea'     => ['required','string','max:20'],
            'emaila'          => ['required','email'],
            'emaila_berriro'  => ['required','same:emaila','email'],
        ], [
            'emaila_berriro.same' => 'Bi emailak berdinak izan behar dira.',
        ]);

        \Log::info('Validación OK');

        $compra = $request->session()->get('compra');
         \Log::info('Compra desde sesión:', ['compra' => $compra]);


        if (!$compra) {
            \Log::error('NO HAY COMPRA EN SESIÓN');
            return back()->withErrors(['global' => 'Ez dago hautatutako ekitaldirik.'])->withInput();
        }

        $ekitaldia = Ekitaldia::findOrFail($compra['id_ekitaldia']);
        $eserleku  = \DB::table('eserleku')->where('id_eserleku', $compra['id_eserleku'])->first();

        \Log::info('Ekitaldia y eserleku obtenidos');
        \Log::info('Intentando enviar email a: ' . $data['emaila']);

        // Enviar email (en dev con MAIL_MAILER=log se escribe en storage/logs/laravel.log)
        try {
            Mail::to($data['emaila'])->send(
                new ErosketaConfirmacion($ekitaldia, $eserleku, $data, $compra)
            );
            \Log::info('EMAIL ENVIADO CON ÉXITO');
        } catch (\Exception $e) {
            \Log::error('ERROR AL ENVIAR EMAIL: ' . $e->getMessage());
            \Log::error($e->getTraceAsString());
        }

        $request->session()->forget('compra');

        return redirect()->route('hasiera')->with('success', 'Zure datuak jaso ditugu. Mezu elektronikoa bidali da.');
    }
}

