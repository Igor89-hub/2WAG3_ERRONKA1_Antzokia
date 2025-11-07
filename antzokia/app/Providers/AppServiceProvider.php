<?php

namespace App\Providers;

use App\Enums\LangileRole;
use Illuminate\Support\ServiceProvider;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('view-users', function (User $user) {
            return $user->role === LangileRole::AdminNagusia;
        });
    }
}
