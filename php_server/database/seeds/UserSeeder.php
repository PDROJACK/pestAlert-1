<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'manish',
            'email' => 'manishsahani@gmail.com',
            'password' => bcrypt('manish'),
        ]);
    }
}
