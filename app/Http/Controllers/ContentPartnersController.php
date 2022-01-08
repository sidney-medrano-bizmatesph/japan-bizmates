<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ContentPartner;
use App\Models\ContentPartnerItem;
use App\Common;
class ContentPartnersController extends Controller
{
    //
    public function initialize(Request $request){
        $content_partner = ContentPartner::first();
        return response()->json($content_partner);
    }

    public function cms(Request $request){
        $content_partner = ContentPartner::first();
        if($content_partner == null){
            $content_partner = new ContentPartner;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'description'=> ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$content_partner){
               
                $content_partner->title = $request->title;
                
                $content_partner->description = $request->description;

                $content_partner->save();
                return ["status"=>"success", "message"=>"Successfully updated content partner."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function create(Request $request){
        if(isset($request->edit)){
            $content_partner_item = ContentPartnerItem::find($request->id);
            if($content_partner_item == null){
                return response()->json(["status"=>"error", "message"=>"The content partner does not exist."]);
            }
        }else{
            $content_partner_item = new ContentPartnerItem;
        }
        $validator = \Validator::make($request->all(), 
        //rules
        [
            "name" => ["required", isset($request->edit) && $content_partner_item->name == $request->name ? "" : "unique:content_partner_items"],
            "details" => ["required"],
            "collapse" => ["required"],
            "picture" => [isset($request->edit) ? "" : "required"]
        ]
        //messages
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try {
            return response()->json(
                \DB::transaction(function() use ($request, $content_partner_item){
                    $file = $request->picture;
                    if($file){
                        if(!\Storage::disk("public")->exists("/webCMS/images/")){
                            if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                                throw new \Exception("There was an error with the storage server.");
                            }
                        }
                        if(!empty($content_partner_item->picture)){
                            $name = $content_partner_item->picture;
                            \Storage::disk("public")->delete("/webCMS/images/$name");
                            // if(){
                            //     throw new \Exception("There was an error in deleting the previous picture.");
                            // }
                            
                        }
                        if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                            $content_partner_item->picture = $file->hashName();
                        }else{
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    $content_partner_item->name = $request->name;
                    $content_partner_item->details = $request->details;
                    $content_partner_item->collapse = $request->collapse;
                    $content_partner_item->sequence = $request->sequence;

                    $verb = "add";
                    $verb_past = "added";
                    if(isset($request->edit)){
                        $verb = "update";
                        $verb_past = "updated";
                    }
                    if($content_partner_item->save()){
                        return ["status"=>"success", "message"=>"Successfully $verb_past $request->name"];
                    }else{
                        throw new \Exception("Failed to $verb $request->fund_name");
                    }
                })
            );
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: ".$e->getMessage().". Please contact itc-support@mmsu.edu.ph"]);
        }
    }

    public function all(Request $request){
        $content_partner_items = ContentPartnerItem::getter();
        return Common::all($request, $content_partner_items);
    }

    public function get(Request $request){
        $content_partner_item = ContentPartnerItem::getter()->where("id", $request->id)->first();
        if(is_null($content_partner_item)){
            return response()->json(["status"=>"error", "message"=>"Content partner does not exist."]);
        }else{
            return response()->json(["status"=>"success", "result"=>$content_partner_item]);

        }
    }

    public function delete(Request $request){
        $content_partner_item = ContentPartnerItem::getter()->where("id", $request->id)->first();
        if(is_null($content_partner_item)){
            return response()->json(["status"=>"error", "message"=>"Content partner does not exist."]);
        }else{
            $title = $content_partner_item->title;
            $content_partner_item->delete();
            return response()->json(["status"=>"success", "message"=>"Successfully deleted $title."]);
        }
    }
}
