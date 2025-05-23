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
        Schema::create('stock_goodies', function (Blueprint $table) {
            $table->id("idGoodie");
            $table->String("nomGoodie")->required();
            $table->integer("quantite")->required();
            $table->String("description")->required();
            $table->float("coutUnitaire")->required();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_goodies');
    }
};
