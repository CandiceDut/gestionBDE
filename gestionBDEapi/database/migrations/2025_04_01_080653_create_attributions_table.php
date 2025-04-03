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
        Schema::create('attributions', function (Blueprint $table) {
            $table->id();  
            $table->unsignedBigInteger("idReserv")->required();
            $table->unsignedBigInteger("idGoodie")->required();
            $table->integer("quantite")->required();
            $table->timestamps();
            $table->foreign("idReserv")->references('idReserv')->on('reservations')->onDelete("cascade");
            $table->foreign("idGoodie")->references('idGoodie')->on('stock_goodies')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attributions');
    }
};
