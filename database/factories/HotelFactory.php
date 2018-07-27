<?php

use Faker\Generator as Faker;

$factory->define(App\Hotel::class, function (Faker $faker) {
    return [
        'image' => $faker->imageUrl($width = 300, $height = 300),
        'name' => $faker->company,
        'address' => $faker->address,
        'rating' => $faker->numberBetween($min = 1, $max = 5)
    ];
});
