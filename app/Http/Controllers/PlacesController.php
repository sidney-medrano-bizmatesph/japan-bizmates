<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PlacesController extends Controller
{
    private $lls = [
        'tokyo' => '35.6762,139.6503',
        'yokohama' => '35.4437,139.6380',
        'kyoto' => '35.0116,135.7681',
        'osaka' => '34.6937,135.5023',
        'sapporo' => '43.0618,141.3545',
        'nagoya' => '35.1815,136.9066',
    ];

    public function all(Request $request)
    {
        $foursquare_key = env("FOURSQUARE_KEY");
        $query_string='';
        $radius='';

        if (
            isset($request->query_string) 
            && $request->query_string != ''
        ) {
            $query_string = "&query='" . $request->query_string . "'";
        }

        if (
            isset($request->radius) 
            && $request->radius != ''
        ) {
            $radius = "&radius=$request->radius";
        }

        $ll = $this->lls[$request->place];

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => $foursquare_key
        ])->get("https://api.foursquare.com/v3/places/search?fields=fsq_id%2Cname%2Clocation%2Ccategories%2Crelated_places%2Cdescription%2Crating%2Cphotos%2Ctips%2Ctel%2Cgeocodes&ll={$ll}&sort=RATING&limit=50$query_string$radius");
        
        return $response;
    }

    public function get(Request $request){
        $foursquare_key = env("FOURSQUARE_KEY");

        $place_details = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => $foursquare_key
        ])->get("https://api.foursquare.com/v3/places/{$request->fsq_id}?fields=name%2Clocation%2Ccategories%2Crelated_places%2Cdescription%2Crating%2Ctel%2Cgeocodes%2Chours%2Cemail%2Csocial_media%2Cmenu%2Cstats%2Cwebsite");
        
        $photos = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => $foursquare_key
        ])->get("https://api.foursquare.com/v3/places/{$request->fsq_id}/photos?limit=50&sort=NEWEST");
        
        $tips = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => $foursquare_key
        ])->get("https://api.foursquare.com/v3/places/{$request->fsq_id}/tips?limit=50&sort=NEWEST");

        return ["place_details"=>$place_details->json(), "photos"=>$photos->json(), "tips"=>$tips->json()];
    }

    public function getWeather(Request $request){
        $openweather_key = env("OPENWEATHER_KEY");

        $ll = $this->lls[$request->place];
        $ll_split = explode(",",$ll);
        $lat = $ll_split[0];
        $lon = $ll_split[1];

        return Http::get("api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=$openweather_key");
    }
}
