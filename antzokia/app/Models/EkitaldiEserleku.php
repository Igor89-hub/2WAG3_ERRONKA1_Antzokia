<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EkitaldiEserleku extends Model
{
    protected $table = 'ekitaldi_eserleku';
    public $timestamps = false;
    public $incrementing = false;
    protected $primaryKey = null; // PK compuesto (id_eserleku, id_ekitaldia)

    protected $fillable = ['id_eserleku', 'id_ekitaldia', 'hartuta'];

    protected $casts = [
        'hartuta' => 'boolean',
    ];
}
