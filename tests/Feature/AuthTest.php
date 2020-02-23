<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function loginTest()
    {
        $response = $this->json('POST', '/api/login', ['email' => 'admin@test.com', 'password' => '123456789']);

        $response->assertStatus(200);
    }
}
