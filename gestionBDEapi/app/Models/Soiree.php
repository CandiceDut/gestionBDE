<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soiree extends Model
{
    use HasFactory;

    protected $primarykey=["idSoiree"];

    protected $fillable=["nomSoiree","lieu","dateHeure","prix","capaciteMax","theme"];
    
    // Relation avec le modèle Etudiant
    public function etudiants()
    {
        return $this->belongsToMany(Etudiant::class, 'reservations', 'idSoiree', 'idEtud')
                    ->withPivot('dateReserv', 'statusReserv'); // Les colonnes supplémentaires dans la table pivot
    }
}
