<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\StockGoodie;

class StockGoodieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stockGoodies = StockGoodie::all();
        return response()->json($stockGoodies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nomGoodie'=>'required|string|max:255',
            'quantite'=>'required|int|max:100',
            'description'=>'required|string|max:255',
            'coutUnitaire'=>'required|int|max:50'
        ]);
        $stockGoodie = StockGoodie::create($request->all());
        return response()->json($stockGoodie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $stockGoodie = StockGoodie::where('idGoodie',$id)->first();

        if(!$stockGoodie){
            return response()->json(["message"=> "StockGoodie non trouvé !"],404);
        }

        return response()->json($stockGoodie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $stockGoodie = StockGoodie::where('idGoodie',$id)->first();

        if(!$stockGoodie){
            return response()->json(["message"=> "StockGoodie non trouvé !"],404);
        }

        $stockGoodie->update($request->all());
        return response()->json($stockGoodie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $stockGoodie = StockGoodie::where('idGoodie',$id)->first();

        if(!$stockGoodie){
            return response()->json(["message"=> "StockGoodie non trouvé !"],404);
        }
        $stockGoodie->delete();
        return response()->json(["message"=> "StockGoodie supprimé !"]);
    }
}
