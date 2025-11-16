<?php

namespace App\Command;

use AllowDynamicProperties;
use App\Entity\Company;
use App\Repository\CompanyRepository;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AllowDynamicProperties]
#[AsMessageHandler]
class CreateCompanyCommandHandler
{

    public function __construct(
        CompanyRepository $companyRepository,
    )
    {
        $this->companyRepository = $companyRepository;
    }

    public function __invoke(CreateCompanyCommand $createCompanyCommand):void
    {
       $company = new Company(
           name: $createCompanyCommand->name,
           city: $createCompanyCommand->city,
           url: $createCompanyCommand->urlWebSite,
           contactName: $createCompanyCommand->contactName,
           contactEmail: $createCompanyCommand->contactEmail,
       );

       $this->companyRepository->save($company);
    }
}
