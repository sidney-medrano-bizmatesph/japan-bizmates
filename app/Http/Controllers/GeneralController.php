<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\General;

class GeneralController extends Controller
{
    //
    public function generalInitialize(Request $request){
        $general = General::first();
        return response()->json($general);
    }

    public function generalCMS(Request $request){
        $general = General::first();
        if($general == null){
            $general = new General;
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$general){
                $file = $request->round_logo;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($general->round_logo)){
                        $name = $general->round_logo;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $general->round_logo = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $file = $request->logo;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($general->logo)){
                        $name = $general->logo;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $general->logo = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $general->save();
                return ["status"=>"success", "message"=>"Successfully updated general."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
