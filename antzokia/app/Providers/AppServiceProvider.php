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
        // AdminNagusia tiene acceso a TODO
        Gate::define('view-users', function (User $user) {
            return $user->role === LangileRole::AdminNagusia;
        });

        Gate::define('manage-users', function (User $user){
            return $user->role === LangileRole::AdminNagusia;
        });

        // Admin y AdminNagusia pueden gestionar ekitaldiak
        Gate::define('manage-ekitaldiak', function(User $user){
            return in_array($user->role, [LangileRole::Admin, LangileRole::AdminNagusia]);
        });

        //Paginas publicas
        Gate::define('view-denak', function(User $user){
            return true;
        });
    }
}
