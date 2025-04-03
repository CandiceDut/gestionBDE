<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StockGoodie>
 */
class StockGoodieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nomGoodie' => $this->faker->text(40),
            'quantite' => $this->faker->biasedNumberBetween(0,100),
            'description' => $this->faker->paragraph(),
            'coutUnitaire' => $this->faker->biasedNumberBetween(0,50)
        ];
    }
}
