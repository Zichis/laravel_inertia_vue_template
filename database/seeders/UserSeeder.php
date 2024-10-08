<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => env('ADMIN_NAME', 'John Doe'),
            'email' => env('ADMIN_EMAIL', 'johndoe@yopmail.com'),
            'password' => Hash::make(env('ADMIN_PASSWORD', 'password')),
            'email_verified_at' => Carbon::now(),
        ]);

        $admin->assignRole(['admin']);
    }
}
