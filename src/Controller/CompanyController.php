<?php

declare(strict_types=1);

namespace App\Controller;

use App\Command\CreateCompanyCommand;
use App\Controller\Input\Company\CreateCompanyInput;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Attribute\Route;
#[Route('/company')]
class CompanyController extends AbstractController
{
    private MessageBusInterface $bus;

    public function __construct(MessageBusInterface $bus)
    {
        $this->bus = $bus;
    }

    #[Route('/create', name: 'app_company_create', methods: ['POST'])]
    public function create(CreateCompanyInput $input): JsonResponse
    {
        $this->bus->dispatch(new CreateCompanyCommand(
            $input->name,
            $input->city,
            $input->urlWebSite,
            $input->contactName,
            $input->contactEmail,
        ));

        return $this->json([]);
    }
}
