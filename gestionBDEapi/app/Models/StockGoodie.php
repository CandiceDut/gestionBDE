<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockGoodie extends Model
{
    use HasFactory;

    protected $primarykey=["idGoodie"];

    protected $fillable=["nomGoodie","quantite","description","coutUnitaire"];
    
    // Relation avec le modèle Reservation
    public function reserves()
    {
        return $this->belongsToMany(Reservation::class, 'reservation', 'idGoodie', 'idReserv');
    }
}
