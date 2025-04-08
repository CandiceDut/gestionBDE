<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Etudiant;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $etudiants = Etudiant::all();
        return response()->json($etudiants);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nomEtud'=>'required|string|max:255',
            'prenomEtud'=>'required|string|max:255',
            'email'=>'required|string|max:255',
            'numTel'=>'required|string|size:10|regex:/^\d+$/'
        ]);
        $etudiant = Etudiant::create($request->all());
        return response()->json($etudiant, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $etudiant = Etudiant::where('idEtud',$id)->first();

        if(!$etudiant){
            return response()->json(["message"=> "Etudiant non trouvé !"],404);
        }

        return response()->json($etudiant);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $etudiant = Etudiant::where('idEtud',$id)->first();

        if(!$etudiant){
            return response()->json(["message"=> "Etudiant non trouvé !"],404);
        }

        $etudiant->update($request->all());
        return response()->json($etudiant);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $etudiant = Etudiant::where('idEtud',$id)->first();

        if(!$etudiant){
            return response()->json(["message"=> "Etudiant non trouvé !"],404);
        }
        $etudiant->delete();
        return response()->json(["message"=> "Etudiant supprimé !"]);
    }
}
