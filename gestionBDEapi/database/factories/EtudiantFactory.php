<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Etudiant>
 */
class EtudiantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nomEtud' => $this->faker->lastName(),
            'prenomEtud' => $this->faker->firstName(),
            'email' => $this->faker->unique()->safeEmail(),
            'numTel' => $this->faker->unique()->phoneNumber()
        ];
    }
}
