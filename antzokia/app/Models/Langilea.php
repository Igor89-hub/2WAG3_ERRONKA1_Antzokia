<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Langilea extends Model
{
    public $timestamps = false;

    protected $table = 'langileak';

    protected $primaryKey = 'id_langilea';

    protected $fillable = [
        'izena',
        'abizenak',
        'emaila',
        'telefonoa',
        'pasahitza',
        'baimen_mota',
    ];

    protected $hidden = [
        'pasahitza',
    ];
}
