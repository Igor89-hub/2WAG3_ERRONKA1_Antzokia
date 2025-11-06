<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LangileBerriaController extends Controller
{
    public function open(): Response
    {
        return Inertia::render('langileakSortu');
    }
}

