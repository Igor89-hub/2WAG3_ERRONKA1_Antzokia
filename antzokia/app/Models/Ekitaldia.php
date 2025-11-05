<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ekitaldia extends Model
{
    /**
     * Le decimos a Laravel que NO usamos 'created_at' y 'updated_at'.
     * (¡Esto lo has puesto bien!)
     */
    public $timestamps = false;

    /**
     * ¡NUEVO! Le decimos a Laravel el nombre real de nuestra tabla.
     */
    protected $table = 'ekitaldiak';

    /**
     * ¡NUEVO! Le decimos a Laravel cuál es nuestra clave primaria.
     */
    protected $primaryKey = 'id_ekitaldia';

    /**
     * Los campos que se pueden rellenar (esto ya lo tenías bien).
     */
    protected $fillable = [
        'izena',
        'hasiera_data',
        'bukaera_data',
        'lekua',
        'deskribapena',
        'image_url',
    ];
}
