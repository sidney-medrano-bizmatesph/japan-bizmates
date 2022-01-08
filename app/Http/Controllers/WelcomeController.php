<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Welcome;

class WelcomeController extends Controller
{
    //
    public function welcomeInitialize(Request $request){
        $welcome = Welcome::first();
        return response()->json($welcome);
    }

    public function welcomeCMS(Request $request){
        $welcome = Welcome::first();
        if($welcome == null){
            $welcome = new Welcome;
        }
        $validator = \Validator::make($request->all(), [
            'content' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$welcome){
                $file = $request->picture;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($welcome->picture)){
                        $name = $welcome->picture;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $welcome->picture = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $welcome->content = $request->content;
                $welcome->save();
                return ["status"=>"success", "message"=>"Successfully updated welcome."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
