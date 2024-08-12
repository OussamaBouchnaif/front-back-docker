<?php

namespace App\Controller;

use App\Entity\Games;
use DateTimeImmutable;
use Cocur\Slugify\Slugify;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestController extends AbstractController
{
 
    public function __construct(private EntityManagerInterface $entityManager)
    {
       
    }
    #[Route('/add-product', name: 'add-product')]
    public function index(Request $request):Response
    {

        $game = new Games();
        $game->setName('rfffffgfgfg');
        $game->setDescription('testtets');
        $game->setImage('testtets');
        $game->setGamesCount( 0);
        $game->setReviewsCount(0);
        $game->setRating(10);
        $game->setUpdatesAt(new \DateTimeImmutable);

      

        // Persist the entity
        $this->entityManager->persist($game);
        $this->entityManager->flush();

        return new JsonResponse(['status' => 'Game created successfully', 'id' => $game->getId()]);
       
    }

    #[Route('/games',name:'games')]
    public function games():JsonResponse
    {
        $games = [
            ['id' => 1, 'name' => 'Game One', 'description' => 'Description for Game One','platform'=>'pc'],
            ['id' => 2, 'name' => 'Game Two', 'description' => 'Description for Game Two','platform'=>'playstation'],
            ['id' => 3, 'name' => 'Game Three', 'description' => 'Description for Game Three','platform'=>'xbox'],
        ];

        return new JsonResponse(['results' => $games]);
    }
}
