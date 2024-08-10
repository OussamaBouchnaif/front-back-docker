<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/add-product', name: 'add-product')]
    public function index(Request $request): Response
    {

        $contentType = $request->headers->get('Content-Type');

        if (strpos($contentType, 'application/json') !== false) {
            // Si le contenu est JSON, le décoder en tableau associatif
            $requestData = json_decode($request->getContent(), true);
        } else if (strpos($contentType, 'application/x-www-form-urlencoded') !== false) {
            // Si le contenu est x-www-form-urlencoded, utiliser $request->request->all()
            $requestData = $request->request->all();
        } else {
            // Si le contenu est d'un autre type, le traiter différemment
            $requestData = null;
        }
    
        // Créer une réponse
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
    
        // Configurer le contenu de la réponse avec le body de la requête
        $response->setContent(json_encode([
            'message' => 'Oussama',
            'request_body' => $requestData,  // Inclure les données du body
        ]));
    
        // Configurer le statut HTTP à 200 OK
        $response->setStatusCode(Response::HTTP_OK);
    
        return $response;
    }
}
