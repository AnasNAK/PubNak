<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // $user = User::where('email', $request->email)->first();

        
        $user= Auth::user();
        $role = $user ? $user->role : null;
        if(!$role === 'Admin'){
            return abort(403,'not have access');

        }

        return $next($request);
    }
}
