<?php

namespace App\Factory;

use App\Entity\Games;
use Zenstruck\Foundry\Persistence\PersistentProxyObjectFactory;

/**
 * @extends PersistentProxyObjectFactory<Games>
 */
final class GamesFactory extends PersistentProxyObjectFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
    }

    public static function class(): string
    {
        return Games::class;
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function defaults(): array|callable
    {
        return [
            'name' => self::faker()->name(), 
            'description' => self::faker()->text(255),
            'gamesCount' => self::faker()->randomNumber(),
            'image' => self::faker()->text(255),
            'rating' => self::faker()->randomFloat(),
            'reviewsCount' => self::faker()->randomNumber(),
            'slug' => self::faker()->text(255),
            'updatesAt' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): static
    {
        return $this
            // ->afterInstantiate(function(Games $games): void {})
        ;
    }
}
