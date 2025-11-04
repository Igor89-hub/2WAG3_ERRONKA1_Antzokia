<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EkitaldiakController extends Controller
{
    public function getAllEkitaldiak(){
        $ekitaldiGuztiak = DB::table('users')->get();

        return Inertia::render('ekitaldiak', ['ekitaldiGuztiak' => $ekitaldiGuztiak]);
    }
}
