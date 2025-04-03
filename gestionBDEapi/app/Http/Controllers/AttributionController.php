<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribution;

class AttributionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attributions = Attribution::all();
        return response()->json($attributions);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'quantite'=>'required|int|max:100'
        ]);
        $attribution = Attribution::create($request->all());
        return response()->json($attribution, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $attribution = Attribution::find($id);

        if(!$attribution){
            return response()->json(["message"=> "Attribution non trouvé !"],404);
        }

        return response()->json($attribution);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $attribution = Attribution::find($id);

        if(!$attribution){
            return response()->json(["message"=> "Attribution non trouvé !"],404);
        }

        $attribution->update($request->all());
        return response()->json($attribution);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $attribution = Attribution::find($id);

        if(!$attribution){
            return response()->json(["message"=> "Attribution non trouvé !"],404);
        }
        $attribution->delete();
        return response()->json(["message"=> "Attribution supprimé !"]);
    }
}
