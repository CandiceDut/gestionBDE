<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
        $request->validate([
            'nomSoiree'=>'required|string|max:255',
            'lieu'=>'required|string|max:255',
            'dateHeure'=>'required|dateTime|max:255',
            'prix'=>'required|int|max:10',
            'capaciteMax'=>'required|int|max:100',
            'theme'=>'required|string|max:255'
        ]);
        $soiree = Soiree::create($request->all());
        return response()->json($soiree, 201);
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
