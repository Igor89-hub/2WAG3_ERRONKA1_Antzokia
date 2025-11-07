<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Eserleku extends Model
{
    protected $table = 'eserleku';
    protected $primaryKey = 'id_eserleku';
    public $timestamps = false;

    protected $fillable = ['id_eserleku', 'deskribapena'];
    public $incrementing = false; // PK no AUTO_INCREMENT
    protected $keyType = 'int';
}
