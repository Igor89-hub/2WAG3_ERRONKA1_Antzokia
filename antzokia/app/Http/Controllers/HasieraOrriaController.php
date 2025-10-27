<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HasieraOrriaController extends Controller
{
    public function ekitaldiak(){
        //Primera operacion que aprendemos en Laravel
        //COMO HACER UN SELECT CON LA FECHA MAS CERCANA
        $aurrenekoEkitaldia = DB::table('antzokia.ekitaldiak')
        ->where('hasiera_data', '>=', Carbon::now())
        ->orderBy('hasiera_data', 'asc')
        ->first();

        $besteEkitaldiak = DB::table('antzokia.ekitaldiak')
        ->where('id_ekitaldia', '!=', $aurrenekoEkitaldia?->id_ekitaldia)
        ->orderBy('hasiera_data', 'desc')
        ->take(3)
        ->get();
        return Inertia::render('hasiera', [
            'aurrenekoEkitaldia' => $aurrenekoEkitaldia,
            'besteEkitaldiak' => $besteEkitaldiak
        ]);
    }
}
