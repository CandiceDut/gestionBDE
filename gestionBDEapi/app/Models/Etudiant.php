<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;

    protected $primarykey=["idEtud"];

    protected $fillable=["nomEtud","prenomEtud","email","numTel"];

    // Relation avec le modèle Soiree
    public function soirees()
    {
        return $this->belongsToMany(Soiree::class, 'reservations', 'idEtud', 'idSoiree')
                    ->withPivot('dateReserv', 'statusReserv'); // Les colonnes supplémentaires dans la table pivot
    }
}
