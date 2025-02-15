<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0;$i <100; $i++){
            DB::table('news')->insert([
                'title'=>fake()->title(),
                'description'=>fake()->paragraph(3,true),
                'category'=>fake()->sentence(),
                'author'=>fake()->name(),
            ]);
        }
       
    }
}
