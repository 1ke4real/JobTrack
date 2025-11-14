<?php

namespace App\DataFixtures;

use App\Entity\Company;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CompanyFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 10; $i++) {
            $company = new Company(
                name: "Entreprise " . $i,
                city: 'Ville ' . $i,
                url: 'http://www.entreprise' . $i . '.com',
                contactName: 'Contact ' . $i,
                contactEmail: 'contact' . $i . '@entreprise' . $i . '.com',
            );
            $manager->persist($company);
        }

        $manager->flush();
    }
}
