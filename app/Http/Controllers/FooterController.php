<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Footer;

class FooterController extends Controller
{
    //
    public function initialize(Request $request){
        $footer = Footer::first();
        return response()->json($footer);
    }

    public function cms(Request $request){
        $footer = Footer::first();
        $validator = \Validator::make($request->all(), [
            'emails' => ['required'],
            'contact_numbers'=> ['required'],
            'facebook'=> ['required'],
            'instagram'=> ['required'],
            'twitter'=> ['required'],
            'logo'=> [$footer == null ? 'required' : '']
        ]);
        
        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }
        
        if($footer == null){
            $footer = new Footer;
        }
        try{
            return response()->json(\DB::transaction(function() use ($request,$footer){
                $file = $request->logo;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($footer->logo)){
                        $name = $footer->logo;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $footer->logo = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }

                $footer->emails = $request->emails;
                $footer->contact_numbers = $request->contact_numbers;
                $footer->facebook = $request->facebook;
                $footer->instagram = $request->instagram;
                $footer->twitter = $request->twitter;

                $footer->save();
                return ["status"=>"success", "message"=>"Successfully updated footer."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
