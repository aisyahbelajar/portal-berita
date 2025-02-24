<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NewsSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 100; $i++) {
            DB::table('news')->insert([
                'title'       => fake()->sentence(),
                'description' => fake()->paragraph(3, true),
                'category'    => fake()->randomElement(['Tech', 'Health', 'Sports', 'Politics', 'Entertainment']),
                'author'      => fake()->name(),
            ]);
        }
    }
}
