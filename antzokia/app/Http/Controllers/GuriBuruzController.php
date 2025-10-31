<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class GuriBuruzController extends Controller
{
    public function open(): Response {
        return Inertia::render('guri_buruz');
    }
}
