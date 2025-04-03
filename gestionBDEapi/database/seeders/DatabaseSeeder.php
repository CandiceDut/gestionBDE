<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Etudiant::factory()->create([
            'nomEtud' => 'Test',
            'prenomEtud' => 'User',
            'email' => 'test@example.com',
            'numTel' => '0548647554',
        ]);

        \App\Models\Soiree::factory()->create([
            'nomSoiree' => 'Test',
            'lieu' => 'La nive',
            'dateHeure' => '2025-05-10 19:00:00',
            'prix' => '12',
            'capaciteMax' => '52',
            'theme' => 'Flute',
        ]);
    }
}
