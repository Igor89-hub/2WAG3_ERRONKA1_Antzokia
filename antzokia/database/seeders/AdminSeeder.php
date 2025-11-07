<?php

namespace Database\Seeders;

use App\Enums\LangileRole;
use App\Models\Langilea;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin Nagusia User',
            'email' => 'admin@gmail.com',
            'role' => LangileRole::AdminNagusia,
            'password' => Hash::make("12345")
        ]);
    }
}
