<?php

namespace App\DataFixtures;

use App\Factory\GamesFactory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        GamesFactory::createMany(10);
        $manager->flush();
    }
}
