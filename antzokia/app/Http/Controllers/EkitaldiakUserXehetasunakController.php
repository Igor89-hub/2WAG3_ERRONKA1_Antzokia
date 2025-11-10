<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EkitaldiakUserXehetasunakController extends Controller
{
    public function getEkitaldiaById($id)
    {
        // Buscamos el evento en la base de datos
        $ekitaldia = DB::table('antzokia.ekitaldiak')
            ->where('id_ekitaldia', $id)
            ->first();

        if (!$ekitaldia) {
            abort(404, 'Ekitaldia ez da aurkitu');
        }

        // Devolvemos la vista de detalle del usuario
        return Inertia::render('ekitaldiakUserXehetasunak', [
            'ekitaldia' => $ekitaldia
        ]);
    }
}
