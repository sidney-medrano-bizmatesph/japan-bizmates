<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactUs;
use App\Mail\AutoReply;

use App\Common;
class ContactUsController extends Controller
{
    //
    public function emailSender(Request $request){
        // Common::mailSetter("sidneym61498@gmail.com", "igxbnvzyistzqyiq");
        Common::mailSetter("contactus@ple-reap.com", "gskkfcjxvyqqtieu");
        // Common::mailSetter("7f7dda34e0c465", "fa676777399070");
        try{
            \Mail::to("contactus@ple-reap.com")->send(new ContactUs([$request->all()]));
            \Mail::to($request->email)->send(new AutoReply([$request->all()]));

            return response()->json(["status"=>"success","message"=>"Email sent successfully."]);
        }catch(\Swift_TransportException $e){
            $error = $e->getMessage();
            return response()->json(["status"=>"error","message"=>"Email was not sent. Please try again later. Error: $error"]);
        }catch(\Exception $e){
            $error = $e->getMessage();
            return response()->json(["status"=>"error","message"=>"There was an exception: $error."]);
        }
    }
}
