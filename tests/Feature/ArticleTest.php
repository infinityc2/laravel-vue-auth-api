<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ArticleTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function articlesTest()
    {
        $this->assertDatabaseMissing('articles', [
            'title' => 'Article',
            'body' => 'Describe'
        ]);
    }
}
