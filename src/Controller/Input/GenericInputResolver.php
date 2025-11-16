<?php

namespace App\Controller\Input;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\SerializerInterface;

final readonly class GenericInputResolver implements ValueResolverInterface
{
    public function __construct(
        private readonly SerializerInterface $serializer
    ) {
    }

    public function resolve(Request $request, ArgumentMetadata $argument): iterable
    {
        $argumentType = $argument->getType();

        if (!class_exists($argumentType) || $argumentType === Request::class) {
            return [];
        }

        try {
            $dto = $this->serializer->deserialize(
                $request->getContent(),
                $argumentType,
                'json'
            );
        } catch (\Throwable $e) {
            throw new BadRequestHttpException('Invalid request body: check JSON format and required fields.');
        }

        return [$dto];
    }
}
