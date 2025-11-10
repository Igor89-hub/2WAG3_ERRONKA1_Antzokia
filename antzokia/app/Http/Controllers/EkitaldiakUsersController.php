<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EkitaldiakUsersController extends Controller {
    public function open() {
        $ekitaldiGuztiak = DB::table('antzokia.ekitaldiak')->get();

        return Inertia::render('ekitaldiakUsers', [
            'ekitaldiGuztiak' => $ekitaldiGuztiak
        ]);
    }
}
