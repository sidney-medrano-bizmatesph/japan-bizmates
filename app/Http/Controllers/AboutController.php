<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\About;

class AboutController extends Controller
{
    //
    public function aboutInitialize(Request $request){
        $about = About::first();
        return response()->json($about);
    }

    public function aboutCMS(Request $request){
        $about = About::first();
        if($about == null){
            $about = new About;
        }

        $validator = \Validator::make($request->all(), [
            'content' => ['required'],
            'title' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$about){
                $file = $request->picture;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($about->picture)){
                        $name = $about->picture;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $about->picture = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $about->title = $request->title;
                $about->content = $request->content;

                $about->save();
                return ["status"=>"success", "message"=>"Successfully updated about."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
