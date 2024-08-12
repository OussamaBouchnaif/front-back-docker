<?php

namespace App\Entity;

use App\Repository\GamesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GamesRepository::class)]
#[ORM\EntityListeners(["App\EntityListener\SlugGeneratorListener"])]
class Games
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $Name = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column]
    private ?int $gamesCount = null;

    #[ORM\Column]
    private ?int $reviewsCount = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: '0')]
    private ?string $rating = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatesAt = null;

    public function __construct()
    {
        $this->updatesAt = new \DateTimeImmutable;
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(?string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getGamesCount(): ?int
    {
        return $this->gamesCount;
    }

    public function setGamesCount(int $gamesCount): static
    {
        $this->gamesCount = $gamesCount;

        return $this;
    }

    public function getReviewsCount(): ?int
    {
        return $this->reviewsCount;
    }

    public function setReviewsCount(int $reviewsCount): static
    {
        $this->reviewsCount = $reviewsCount;

        return $this;
    }

    public function getRating(): ?string
    {
        return $this->rating;
    }

    public function setRating(string $rating): static
    {
        $this->rating = $rating;

        return $this;
    }

    public function getUpdatesAt(): ?\DateTimeImmutable
    {
        return $this->updatesAt;
    }

    public function setUpdatesAt(\DateTimeImmutable $updatesAt): static
    {
        $this->updatesAt = $updatesAt;

        return $this;
    }
}
