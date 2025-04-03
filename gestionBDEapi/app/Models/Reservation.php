<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $primarykey=["idReserv"];
    
    protected $fillable=["idEtud","idSoiree","dateReserv","statusReserv"];
    
    // Relation avec le modèle Etudiant (un étudiant peut avoir plusieurs réservations)
    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class, 'idEtud');
    }

    // Relation avec le modèle Soiree (une soirée peut avoir plusieurs réservations)
    public function soiree()
    {
        return $this->belongsTo(Soiree::class, 'idSoiree');
    }

    // Relation avec le modèle Goodie
    public function stock_goodies()
    {
        return $this->belongsToMany(StockGoodie::class, 'reservation', 'idReserv', 'idGoodie');
    }
}
