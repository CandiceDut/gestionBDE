<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Soiree;

class SoireeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soirees = Soiree::all();
        return response()->json($soirees);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nomSoiree' => 'required|min:4',
            'lieu' => 'required|min:6',
            'dateHeure' => 'required|date',  // Validation de la date
            'prix' => 'required|numeric|min:0',
            'capaciteMax' => 'required|numeric|min:0',
            'theme' => 'required|min:3',
        ]);
    
        // Si la validation échoue
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        // Code pour enregistrer la soirée dans la base de données
        $soiree = new Soiree();
        $soiree->nomSoiree = $request->nomSoiree;
        $soiree->lieu = $request->lieu;
        $soiree->dateHeure = $request->dateHeure; // S'assurer que la date est bien formatée
        $soiree->prix = $request->prix;
        $soiree->capaciteMax = $request->capaciteMax;
        $soiree->theme = $request->theme;
        $soiree->save();
    
        return response()->json(['message' => 'Soirée ajoutée avec succès!', 'soiree' => $soiree], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $soiree = Soiree::where('idSoiree',$id)->first();

        if(!$soiree){
            return response()->json(["message"=> "Soiree non trouvé !"],404);
        }

        return response()->json($soiree);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $soiree = Soiree::where('idSoiree',$id)->first();

        if(!$soiree){
            return response()->json(["message"=> "Soiree non trouvé !"],404);
        }

        $soiree->update($request->all());
        return response()->json($soiree);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $soiree = Soiree::where('idSoiree',$id)->first();

        if(!$soiree){
            return response()->json(["message"=> "Soiree non trouvé !"],404);
        }
        $soiree->delete();
        return response()->json(["message"=> "Soiree supprimé !"]);
    }
}
