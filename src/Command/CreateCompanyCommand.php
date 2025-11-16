<?php

namespace App\Command;

class CreateCompanyCommand
{
    public function __construct(
        public string $name,
        public ?string $city,
        public ?string $urlWebSite,
        public ?string $contactName,
        public ?string $contactEmail,
    )
    {

    }
}
