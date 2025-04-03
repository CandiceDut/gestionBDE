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
        Schema::create('soirees', function (Blueprint $table) {
            $table->id("idSoiree");
            $table->String("nomSoiree")->required();
            $table->String("lieu")->required();
            $table->dateTime("dateHeure")->required();
            $table->integer("prix")->required();
            $table->integer("capaciteMax")->required();
            $table->String("theme")->required();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soirees');
    }
};
