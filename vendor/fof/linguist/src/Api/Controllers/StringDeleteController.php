<?php

namespace FoF\Linguist\Api\Controllers;

use FoF\Linguist\Repositories\StringRepository;
use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class StringDeleteController extends AbstractDeleteController
{
    use AssertPermissionTrait;

    /**
     * @var StringRepository
     */
    protected $strings;

    public function __construct(StringRepository $strings)
    {
        $this->strings = $strings;
    }

    protected function delete(ServerRequestInterface $request)
    {
        $this->assertAdmin($request->getAttribute('actor'));

        $id = Arr::get($request->getQueryParams(), 'id');

        $field = $this->strings->findOrFail($id);

        $this->strings->delete($field);
    }
}
