<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtAuthentication extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $access_token = isset($_COOKIE["access_token"]) ? $_COOKIE["access_token"] : null;
        
        if(!$access_token){
            return $next($request);
        }
        $request->headers->set('Authorization', "Bearer {$access_token}");
        return $next($request);
    }
}
