<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Soiree>
 */
class SoireeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nomSoiree' => $this->faker->text(50),
            'lieu' => $this->faker->address(),
            'dateHeure' => $this->faker->dateTime(),
            'prix' => $this->faker->biasedNumberBetween(0,50),
            'capaciteMax' => $this->faker->biasedNumberBetween(1,100),
            'theme' => $this->faker->text(100)
        ];
    }
}
