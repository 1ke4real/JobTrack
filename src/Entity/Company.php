<?php

namespace App\Entity;

use App\Repository\CompanyRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CompanyRepository::class)]
class Company
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $name;

    #[ORM\Column(type: Types::STRING, length: 255 , nullable: true)]
    private ?string $city = null;

    #[ORM\Column(type: Types::STRING, length: 255 , nullable: true)]
    private ?string $url = null;

    #[ORM\Column(type: Types::STRING, length: 255 , nullable: true)]
    private ?string $contactName = null;

    #[ORM\Column(type: Types::STRING, length: 255 , nullable: true)]
    private ?string $contactEmail = null;


    public function __construct(
        string $name,
        string $city,
        string $url,
        string $contactName,
        string $contactEmail
    )
    {
        $this->name = $name;
        $this->city = $city;
        $this->url = $url;
        $this->contactName = $contactName;
        $this->contactEmail = $contactEmail;
    }


    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function getContactName(): ?string
    {
        return $this->contactName;
    }
    public function getContactEmail(): ?string
    {
        return $this->contactEmail;
    }

}
