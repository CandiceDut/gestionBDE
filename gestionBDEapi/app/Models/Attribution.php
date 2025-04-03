<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribution extends Model
{
    use HasFactory;

    protected $primarykey=["idReserv", "idGoodie"];

    public $incrementing = false;  // Indique que l'auto-incrémentation n'est pas utilisée

    protected $fillable=["idReserv","idGoodie","quantite"];

    // Relation avec le modèle Reservation
    public function reservation()
    {
        return $this->belongsTo(Reservation::class, 'idReserv');
    }

    // Relation avec le modèle StockGoodie
    public function stock_goodie()
    {
        return $this->belongsTo(StockGoodie::class, 'idGoodie');
    }
}
