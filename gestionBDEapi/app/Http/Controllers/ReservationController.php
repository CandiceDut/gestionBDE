<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations = Reservation::all();
        return response()->json($reservations);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'dateReserv'=>'required|date',
            'statusReserv'=>'required|string|max:50'
        ]);
        $reservation = Reservation::create($request->all());
        return response()->json($reservation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation = Reservation::where('idReserv',$id)->first();

        if(!$reservation){
            return response()->json(["message"=> "Reservation non trouvé !"],404);
        }

        return response()->json($reservation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $reservation = reservation::where('idReserv',$id)->first();

        if(!$Reservation){
            return response()->json(["message"=> "Reservation non trouvé !"],404);
        }

        $reservation->update($request->all());
        return response()->json($reservation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservation = Reservation::where('idReserv',$id)->first();

        if(!$reservation){
            return response()->json(["message"=> "Reservation non trouvé !"],404);
        }
        $reservation->delete();
        return response()->json(["message"=> "Reservation supprimé !"]);
    }
}
