<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Vision;

class VisionController extends Controller
{
    //

    public function visionInitialize(Request $request){
        $vision = Vision::first();
        return response()->json($vision);
    }

    public function visionCMS(Request $request){
        $vision = Vision::first();
        if($vision == null){
            $vision = new Vision;
        }

        $validator = \Validator::make($request->all(), [
            'content' => ['required'],
            'title' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$vision){
                $file = $request->picture;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($vision->picture)){
                        $name = $vision->picture;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $vision->picture = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $vision->title = $request->title;
                $vision->content = $request->content;

                $vision->save();
                return ["status"=>"success", "message"=>"Successfully updated vision."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
