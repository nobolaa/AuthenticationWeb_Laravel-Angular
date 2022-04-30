<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => 'Nabil',
            'last_name' => 'Ali',
            'email' => 'nabilaliasserhaou@gmail.com',
            'password' => bcrypt('123456789')
        ]);

        User::factory(4)->create();
    }
}
