<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\OurTeam;
use App\Models\OurTeamMember;
use App\Common;
class OurTeamController extends Controller
{
    //
    public function initialize(Request $request){
        $our_team = OurTeam::first();
        return response()->json($our_team);
    }

    public function cms(Request $request){
        $our_team = OurTeam::first();
        if($our_team == null){
            $our_team = new OurTeam;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'description'=> ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$our_team){
               
                $our_team->title = $request->title;
                
                $our_team->description = $request->description;

                $our_team->save();
                return ["status"=>"success", "message"=>"Successfully updated our team."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function create(Request $request){
        if(isset($request->edit)){
            $our_team_member = OurTeamMember::find($request->id);
            if($our_team_member == null){
                return response()->json(["status"=>"error", "message"=>"The team member does not exist."]);
            }
        }else{
            $our_team_member = new OurTeamMember;
        }
        $validator = \Validator::make($request->all(), 
        //rules
        [
            "name" => ["required", isset($request->edit) && $our_team_member->name == $request->name ? "" : "unique:content_partner_members"],
            "position" => ["required"],
            "picture" => [isset($request->edit) ? "" : "required"],
            "sequence" => ["required"]
        ]
        //messages
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try {
            return response()->json(
                \DB::transaction(function() use ($request, $our_team_member){
                    $file = $request->picture;
                    if($file){
                        if(!\Storage::disk("public")->exists("/webCMS/images/")){
                            if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                                throw new \Exception("There was an error with the storage server.");
                            }
                        }
                        if(!empty($our_team_member->picture)){
                            $name = $our_team_member->picture;
                            \Storage::disk("public")->delete("/webCMS/images/$name");
                            // if(){
                            //     throw new \Exception("There was an error in deleting the previous picture.");
                            // }
                            
                        }
                        if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                            $our_team_member->picture = $file->hashName();
                        }else{
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    $our_team_member->name = $request->name;
                    $our_team_member->position = $request->position;
                    $our_team_member->sequence = $request->sequence;

                    $verb = "add";
                    $verb_past = "added";
                    if(isset($request->edit)){
                        $verb = "update";
                        $verb_past = "updated";
                    }
                    if($our_team_member->save()){
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
        $our_team_members = OurTeamMember::getter();
        return Common::all($request, $our_team_members);
    }

    public function get(Request $request){
        $our_team_member = OurTeamMember::getter()->where("id", $request->id)->first();
        if(is_null($our_team_member)){
            return response()->json(["status"=>"error", "message"=>"Team member does not exist."]);
        }else{
            return response()->json(["status"=>"success", "result"=>$our_team_member]);

        }
    }

    public function delete(Request $request){
        $our_team_member = OurTeamMember::getter()->where("id", $request->id)->first();
        if(is_null($our_team_member)){
            return response()->json(["status"=>"error", "message"=>"Team member does not exist."]);
        }else{
            $title = $our_team_member->title;
            $our_team_member->delete();
            return response()->json(["status"=>"success", "message"=>"Successfully deleted $title."]);
        }
    }
}
