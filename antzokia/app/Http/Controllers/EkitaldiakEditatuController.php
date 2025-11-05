<?php

namespace App\Http\Controllers;

use App\Models\Ekitaldia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EkitaldiakEditatuController extends Controller
{
    public function open(Ekitaldia $ekitaldia){
        return Inertia::render('ekitaldiakEditatu', [
            'ekitaldia' => $ekitaldia->only(
                'id_ekitaldia',
                'izena',
                'hasiera_data',
                'bukaera_data',
                'lekua',
                'deskribapena',
                'image_url'
            )
        ]);
    }
}
