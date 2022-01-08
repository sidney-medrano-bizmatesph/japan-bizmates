<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Mission;

class MissionController extends Controller
{
    //
    public function missionInitialize(Request $request){
        $mission = Mission::first();
        return response()->json($mission);
    }

    public function missionCMS(Request $request){
        $mission = Mission::first();
        if($mission == null){
            $mission = new Mission;
        }

        $validator = \Validator::make($request->all(), [
            'content' => ['required'],
            'title' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$mission){
                $file = $request->picture;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($mission->picture)){
                        $name = $mission->picture;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        $mission->picture = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $mission->title = $request->title;
                $mission->content = $request->content;

                $mission->save();
                return ["status"=>"success", "message"=>"Successfully updated mission."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }
}
