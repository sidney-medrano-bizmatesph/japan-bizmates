<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Home;
use App\Models\Feature;
use App\Models\Event;
use App\Models\StudyGuide;
use App\Models\StudyGuideVideo;
use App\Models\Inspiration;
use App\Models\InspirationVideo;
use App\Models\EventCMS;
use App\Common;


class HomeController extends Controller
{
    //
    public function initialize(Request $request){
        $home = Home::first();
        return response()->json($home);
    }

    public function homeCMS(Request $request){
        $home = Home::first();
        if($home == null){
            $home = new Home;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'subtitle'=> ['required'],
            'heading'=> ['required'],
            'description'=> ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }
        try{
            return response()->json(\DB::transaction(function() use ($request,$home){
                $home->title = $request->title;
                $home->subtitle = $request->subtitle;
                $home->heading = $request->heading;
                $home->description = $request->description;

                $home->save();
                return ["status"=>"success", "message"=>"Successfully updated home page."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function featuresInitialize(Request $request){
        $features = Feature::first();
        return response()->json($features);
    }

    public function featuresCMS(Request $request){
        $features = Feature::first();
        if($features == null){
            $features = new Feature;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'description'=> ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }


        try{
            return response()->json(\DB::transaction(function() use ($request,$features){
                $file = $request->picture;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/images/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/images/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }
                    if(!empty($features->name_on_disk)){
                        $name = $features->name_on_disk;
                        \Storage::disk("public")->delete("/webCMS/images/$name");
                        // if(){
                        //     throw new \Exception("There was an error in deleting the previous picture.");
                        // }
                        
                    }
                    if (\Storage::disk("public")->putFile('/webCMS/images/', $file)) {
                        
                        $features->name_on_disk = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                    
                }
                $features->title = $request->title;
                
                $features->description = $request->description;

                $features->save();
                return ["status"=>"success", "message"=>"Successfully updated features."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function eventInitialize(Request $request){
        return EventCMS::first();
    }

    public function eventCMS(Request $request){
        $event = EventCMS::first();
        if($event == null){
            $event = new EventCMS;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json(["status"=> "error", "message" => "Title is required"]);
        }


        try{
            return response()->json(\DB::transaction(function() use ($request,$event){
                $event->title = $request->title;

                $event->save();
                return ["status"=>"success", "message"=>"Successfully updated event."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function addEvent(Request $request){
        $events = new Event;
        
        try{
            return response()->json(\DB::transaction(function() use ($request,$events){
                $file = $request->file;
                if($file){
                    if(!\Storage::disk("public")->exists("/webCMS/videos/")){
                        if(!\Storage::disk("public")->makeDirectory("/webCMS/videos/")){
                            throw new \Exception("There was an error with the storage server.");
                        }
                    }

                    if (\Storage::disk("public")->putFile('/webCMS/videos/', $file)) {
                        $events->name = $file->getClientOriginalName();
                        $events->name_on_disk = $file->hashName();
                    }else{
                        throw new \Exception("There was an error with the storage server.");
                    }
                }
                $events->save();
                return ["status"=>"success", "message"=>"Successfully uploaded " . $file->getClientOriginalName() . "."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function getEvents(Request $request){
        $events = Event::orderBy('name')->get();
        return response()->json($events);
    }

    public function deleteEvent(Request $request){
        $event = Event::find($request->id);
        if($event != null){
            try {
                return response()->json(\DB::transaction(function() use ($request, $event){
                    if(\Storage::disk('public')->delete('/webCMS/videos/'.$event->name_on_disk)){
                        $event->delete();
                        return ["status"=>"success", "message"=>"Successfully deleted video."];
                    }else{
                        throw new \Exception("There was an error in deleting from storage. Please contact the developers.");
                    }
                }));
            }catch(\Exception $e){
                return response()->json(["status"=>"error", "message"=>"There was an exception: " . $e->getMessage() . "."]);
            }
        }else{
            return response()->json(["status"=>"error", "message"=>"Event is alreaady deleted."]);
        }
    }

    public function renameEvent(Request $request){
        $event = Event::find($request->id);
        if($event == null){
            return response()->json(["status"=>"error", "message"=>"The event doesn't exist anymore."]);
        }
        $validator = \Validator::make($request->all(), [
            'name' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$event){
               
                $event->name = $request->name;
                
                $event->save();
                return ["status"=>"success", "message"=>"Successfully renamed $event->name."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function studyGuideInitialize(Request $request){
        $study_guide = StudyGuide::first();
        return response()->json($study_guide);
    }

    public function studyGuideCMS(Request $request){
        $study_guide = StudyGuide::first();
        if($study_guide == null){
            $study_guide = new StudyGuide;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'description'=> ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$study_guide){
               
                $study_guide->title = $request->title;
                
                $study_guide->description = $request->description;

                $study_guide->save();
                return ["status"=>"success", "message"=>"Successfully updated study guide."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function addStudyGuideVideo(Request $request){
        if(isset($request->edit)){
            $study_guide_video = StudyGuideVideo::find($request->id);
            if($study_guide_video == null){
                return response()->json(["status"=>"error", "message"=>"The Study Guide video does not exist."]);
            }
        }else{
            $study_guide_video = new StudyGuideVideo;
        }
        $validator = \Validator::make($request->all(), 
        //rules
        [
            "title" => ["required"],
            "code" => ["required", "max:255", isset($request->edit) && $study_guide_video->code == $request->code ? "" : "unique:study_guide_videos"],
            "sequence" => ["required"]
        ]
        //messages
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try {
            return response()->json(
                \DB::transaction(function() use ($request, $study_guide_video){
                    $study_guide_video->title = $request->title;
                    $study_guide_video->code = $request->code;
                    $study_guide_video->sequence = $request->sequence;

                    $verb = "add";
                    $verb_past = "added";
                    if(isset($request->edit)){
                        $verb = "update";
                        $verb_past = "updated";
                    }
                    if($study_guide_video->save()){
                        return ["status"=>"success", "message"=>"Successfully $verb_past $request->title"];
                    }else{
                        throw new \Exception("Failed to $verb $request->fund_name");
                    }
                })
            );
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: ".$e->getMessage().". Please contact itc-support@mmsu.edu.ph"]);
        }
    }

    public function getStudyGuideVideos(Request $request){
        $study_guide_videos = StudyGuideVideo::getter();
        return Common::all($request, $study_guide_videos);
    }

    public function getStudyGuideVideo(Request $request){
        $study_guide_video = StudyGuideVideo::getter()->where("id", $request->id)->first();
        if(is_null($study_guide_video)){
            return response()->json(["status"=>"error", "message"=>"Study Guide Video does not exist."]);
        }else{
            return response()->json(["status"=>"success", "result"=>$study_guide_video]);

        }
    }

    public function deleteStudyGuideVideo(Request $request){
        $study_guide_video = StudyGuideVideo::getter()->where("id", $request->id)->first();
        if(is_null($study_guide_video)){
            return response()->json(["status"=>"error", "message"=>"Study Guide Video does not exist."]);
        }else{
            $title = $study_guide_video->title;
            $study_guide_video->delete();
            return response()->json(["status"=>"success", "message"=>"Successfully deleted $title."]);
        }
    }

    public function inspirationInitialize(Request $request){
        $inspiration = Inspiration::first();
        return response()->json($inspiration);
    }

    public function inspirationCMS(Request $request){
        $inspiration = Inspiration::first();
        if($inspiration == null){
            $inspiration = new Inspiration;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'description'=> ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$inspiration){
               
                $inspiration->title = $request->title;
                
                $inspiration->description = $request->description;

                $inspiration->save();
                return ["status"=>"success", "message"=>"Successfully updated inspiration."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function addInspirationVideo(Request $request){
        if(isset($request->edit)){
            $inspiration_video = InspirationVideo::find($request->id);
            if($inspiration_video == null){
                return response()->json(["status"=>"error", "message"=>"The Inspiration video does not exist."]);
            }
        }else{
            $inspiration_video = new InspirationVideo;
        }
        $validator = \Validator::make($request->all(), 
        //rules
        [
            "title" => ["required"],
            "code" => ["required", "max:255", isset($request->edit) && $inspiration_video->code == $request->code ? "" : "unique:inspiration_videos"],
            "sequence" => ["required"]
        ]
        //messages
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try {
            return response()->json(
                \DB::transaction(function() use ($request, $inspiration_video){
                    $inspiration_video->title = $request->title;
                    $inspiration_video->code = $request->code;
                    $inspiration_video->sequence = $request->sequence;

                    $verb = "add";
                    $verb_past = "added";
                    if(isset($request->edit)){
                        $verb = "update";
                        $verb_past = "updated";
                    }
                    if($inspiration_video->save()){
                        return ["status"=>"success", "message"=>"Successfully $verb_past $request->title"];
                    }else{
                        throw new \Exception("Failed to $verb $request->fund_name");
                    }
                })
            );
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: ".$e->getMessage().". Please contact itc-support@mmsu.edu.ph"]);
        }
    }

    public function getInspirationVideos(Request $request){
        $inspiration_videos = InspirationVideo::getter();
        return Common::all($request, $inspiration_videos);
    }

    public function getInspirationVideo(Request $request){
        $inspiration_video = InspirationVideo::getter()->where("id", $request->id)->first();
        if(is_null($inspiration_video)){
            return response()->json(["status"=>"error", "message"=>"Inspiration Video does not exist."]);
        }else{
            return response()->json(["status"=>"success", "result"=>$inspiration_video]);
        }
    }

    public function deleteInspirationVideo(Request $request){
        $inspiration_video = InspirationVideo::getter()->where("id", $request->id)->first();
        if(is_null($inspiration_video)){
            return response()->json(["status"=>"error", "message"=>"Inspiration Video does not exist."]);
        }else{
            $title = $inspiration_video->title;
            $inspiration_video->delete();
            return response()->json(["status"=>"success", "message"=>"Successfully deleted $title."]);
        }
    }
}
