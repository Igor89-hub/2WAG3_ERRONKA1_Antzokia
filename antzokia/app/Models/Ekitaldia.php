<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ekitaldia extends Model
{
    protected $table = 'ekitaldiak';
    protected $primaryKey = 'id_ekitaldia';
    public $timestamps = false;

    protected $casts = [
        'hasiera_data' => 'datetime',
        'bukaera_data' => 'datetime',
    ];

        protected $fillable = [
        'izena',
        'hasiera_data',
        'bukaera_data',
        'lekua',
        'deskribapena',
        'image_url',
    ];

    public function eserlekuak()
    {
        return $this->belongsToMany(Eserleku::class, 'ekitaldi_eserleku', 'id_ekitaldia', 'id_eserleku')
                    ->withPivot('hartuta');
    }
}
