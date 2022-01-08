<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FutureOffering;
use App\Models\FutureOfferingImage;

class FutureOfferingsController extends Controller
{
    //
    public function deleteUnusedImages(){
        try{
            return response()->json(\DB::transaction(function(){
                $future_offering = FutureOffering::first();
                $future_offering_images = FutureOfferingImage::all();
                if($future_offering != null){
                    foreach($future_offering_images as $image){
                        if(!\Str::contains($future_offering->content, $image->name)){
                            \Storage::disk('public')->delete("/webCMS/images/$image->name");
                            $image->delete();
                        }
                    }
                    return ["status"=>"success", "message"=>"Successful initialization."];
                }
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " . $e->getMessage() . "."]);
        }
    }

    public function upload(Request $request){
        try{
            return response()->json(\DB::transaction(function() use ($request){
                
                $file = $request->file;
                
                if(!\Storage::disk("public")->exists("/webCMS/images/")){
                    if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
        
                if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                    $future_offering_image = new FutureOfferingImage;
                    $future_offering_image->name = $file->hashName();
                    $future_offering_image->save();
        
                    return ["success"=>true, 'location' => "/storage/webCMS/images/$future_offering_image->name" , 'original_name' => $file->getClientOriginalName()];
                }else{
                    return ["success"=>false, 'original_name' => $file->getClientOriginalName()];
        
                }
            }));
            
        }catch(\Exception $e){
            return response()->json(["success"=>false, "message"=>"There was an exception: " . $e->getMessage() . ".", 400]);
        }

    }

    public function futureOfferingsInitialize(Request $request){
        $future_offerings = FutureOffering::first();
        return response()->json($future_offerings);
    }



    public function futureOfferingsCMS(Request $request){
        $future_offerings = FutureOffering::first();
        if($future_offerings == null){
            $future_offerings = new FutureOffering;
        }

        $validator = \Validator::make($request->all(), [
            'content' => ['required'],
            'title' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$future_offerings){
                $file = $request->picture;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($future_offerings->picture)){
                        $name = $future_offerings->picture;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $future_offerings->picture = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $future_offerings->title = $request->title;
                $future_offerings->content = $request->content;

                $future_offerings->save();
                return ["status"=>"success", "message"=>"Successfully updated futureOfferings."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
