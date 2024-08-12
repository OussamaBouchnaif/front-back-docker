<?php

namespace App\EntityListener;

use App\Entity\Games;
use Cocur\Slugify\Slugify;

class SlugGeneratorListener
{

    private Slugify $slugify;

    public function __construct()
    {
        $this->slugify = new Slugify();
    }

    public function prePersist(Games $games): void
    {
        $this->generateSlug($games);
    }

    public function preUpdate(Games $games): void
    {
        $this->generateSlug($games);
    }

    private function generateSlug(Games $games): void
    {
        if ($games->getName() && !$games->getSlug()) {
            $slug = $this->slugify->slugify($games->getName());
            $games->setSlug($slug);
            // For debugging
             dd($slug);
        }
    }
}
