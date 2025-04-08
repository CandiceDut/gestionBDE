<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id("idReserv")->required();
            $table->unsignedBigInteger("idEtud")->required();
            $table->unsignedBigInteger("idSoiree")->required();
            $table->dateTime("dateReserv")->required();
            $table->String("statusReserv")->required();
            $table->timestamps();
            $table->foreign("idEtud")->references('idEtud')->on('etudiants')->onDelete("cascade");
            $table->foreign("idSoiree")->references('idSoiree')->on('soirees')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
