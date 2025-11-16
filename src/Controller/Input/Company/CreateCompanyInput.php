<?php
namespace App\Controller\Input\Company;

final readonly class CreateCompanyInput
{
    public function __construct(
        public string $name,
        public ?string $city,
        public ?string $urlWebSite,
        public ?string $contactName,
        public ?string $contactEmail,
    ) {
    }
}
