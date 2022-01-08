<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\SubscriptionList;
use App\Models\SubscriptionListItem;
use App\Common;
class SubscriptionListController extends Controller
{
    //
    public function initialize(Request $request){
        $subscription_list = SubscriptionList::first();
        return response()->json($subscription_list);
    }

    public function cms(Request $request){
        $subscription_list = SubscriptionList::first();
        if($subscription_list == null){
            $subscription_list = new SubscriptionList;
        }
        $validator = \Validator::make($request->all(), [
            'title' => ['required'],
            'bundle_header'=> ['required'],
            'avail_all_header'=> ['required'],
            'one_year_header'=> ['required'],
            'button'=> ['required', 'max:255'],


        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try{
            return response()->json(\DB::transaction(function() use ($request,$subscription_list){
               
                $subscription_list->title = $request->title;
                
                $subscription_list->bundle_header = $request->bundle_header;
                $subscription_list->avail_all_header = $request->avail_all_header;
                $subscription_list->one_year_header = $request->one_year_header;
                $subscription_list->button = $request->button;


                $subscription_list->save();
                return ["status"=>"success", "message"=>"Successfully updated subscription list."];
            }));
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an exception: " .$e->getMessage() . "."]);
        }
    }

    public function create(Request $request){
        if(isset($request->edit)){
            $subscription_list_item = SubscriptionListItem::find($request->id);
            if($subscription_list_item == null){
                return response()->json(["status"=>"error", "message"=>"The subscription list item does not exist."]);
            }
        }else{
            $subscription_list_item = new SubscriptionListItem;
        }
        $validator = \Validator::make($request->all(), 
        //rules
        [
            "name" => ["required", isset($request->edit) && $subscription_list_item->name == $request->name ? "" : "unique:content_partner_items"],
            "months" => ["required"],
            "subjects" => ["required"],
            "amount" => ["required"]
        ]
        //messages
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        try {
            return response()->json(
                \DB::transaction(function() use ($request, $subscription_list_item){
                    
                    $subscription_list_item->name = $request->name;
                    $subscription_list_item->amount = $request->amount;
                    $subscription_list_item->subjects = $request->subjects;
                    $subscription_list_item->months = $request->months;


                    $verb = "add";
                    $verb_past = "added";
                    if(isset($request->edit)){
                        $verb = "update";
                        $verb_past = "updated";
                    }
                    if($subscription_list_item->save()){
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
        $subscription_list_items = SubscriptionListItem::getter();
        return Common::all($request, $subscription_list_items);
    }

    public function get(Request $request){
        $subscription_list_item = SubscriptionListItem::getter()->where("id", $request->id)->first();
        if(is_null($subscription_list_item)){
            return response()->json(["status"=>"error", "message"=>"Study Guide Video does not exist."]);
        }else{
            return response()->json(["status"=>"success", "result"=>$subscription_list_item]);

        }
    }

    public function delete(Request $request){
        $subscription_list_item = SubscriptionListItem::getter()->where("id", $request->id)->first();
        if(is_null($subscription_list_item)){
            return response()->json(["status"=>"error", "message"=>"Study Guide Video does not exist."]);
        }else{
            $title = $subscription_list_item->title;
            $subscription_list_item->delete();
            return response()->json(["status"=>"success", "message"=>"Successfully deleted $title."]);
        }
    }
}
