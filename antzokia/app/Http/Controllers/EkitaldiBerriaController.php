<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EkitaldiBerriaController extends Controller
{
    public function open(): Response{
        return Inertia::render('ekitaldiakSortu');
    }
}
