<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\User;
use Validator;
use UAParser\Parser;
use JWTAuth;
class LoginController extends Controller
{
    use AuthenticatesUsers;

    //  protected $maxLoginAttempts=5;
    //  protected $decayMinutes=1;
    public function logoutUser(Request $request){
        try{
            if(isset($_COOKIE['access_token'])){
                $token = JWTAuth::setToken($_COOKIE['access_token']);

                try {
                    $payload = $token->payload();
                    if($payload['exp'] < time())
                        JWTAuth::invalidate();
                } catch (\Exception $e) {
                    // do whatever you want to do if a token is expired
                }
            }
            
            setcookie('admin_access_token', null, 1, null, null, false, true);
            setcookie('access_token', null, 1, null, null, false, false);
            setcookie('user_id', null, 1, null, null, false, false);
            setcookie('expiration', null, 1);

            return response()->json(["status"=>"success"]);
        }catch(\Exception $e){
            return response()->json(["status"=>"error", "message"=>"There was an error in trying to logout.", "error"=>$e->getMessage()]);
        }
    }

    public function loginAs(Request $request){
        $user = User::where("id", $request->id)->first();
        $token = JWTAuth::fromUser($user);
        setcookie('access_token', $token, time() + 43200, null, null, false, true);
        setcookie('user_id', $user->id, time() + 43200, null, null, false, true);
        setcookie('expiration', time() + 43200);
        return response()->json(["status"=>"success"]);
        // return response()->json($token);
    }

    public function backToAdmin(Request $request){
        JWTAuth::invalidate();
        
        $payload = JWTAuth::setToken($_COOKIE['admin_access_token'])->payload();
        setcookie('access_token', $_COOKIE['admin_access_token'], $payload['exp'], null, null, false, true);
        setcookie('user_id', $payload['user']->id, $payload['exp'], null, null, false, true);
        setcookie('expiration', $payload['exp']);

        return response()->json(['status'=>'success', 'payload'=>$payload]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string','max:255'],
            'password'=> 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }
        // if ($this->hasTooManyLoginAttempts($request)) {
        //     $this->fireLockoutEvent($request);
        //     $message = "Too many logins";
        //     return response()->json(['email' => $message, 'password' => $message], 400);
        // }
        $credentials = $request->only('email', 'password');
        try {
            $user = User::where('email', $request->get('email'))->first();
            $returnError = false;
            if($user == null){
                $returnError = true;
            }
            if (!$token = JWTAuth::attempt($credentials) ) {
                $returnError = true;
            }
            if($returnError){
                // $this->incrementLoginAttempts($request);
                return response()->json(['email'=>'Invalid credentials', 'password'=>'Invalid credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['email'=>'Could not create token'], 500);
        }
        if($user->role_id == 1){
            setcookie('admin_access_token', $token, time() + 43200, null, null, false, true);
        }

        setcookie('access_token', $token, time() + 43200, null, null, false, true);
        setcookie('user_id', $user->id, time() + 43200, null, null, false, true);
        setcookie('expiration', time() + 43200);

        return response()->json(["status"=>"success"]);
        
    }

    public function changePassword(Request $request){
        $validator = Validator::make($request->all(),[
            "current_password"=>[new CurrentPassword, "required"]
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        $user = User::find(\Auth::User()->id);
        $user->password = bcrypt($request->new_password);

        if($user->save()){
            return response()->json(["status"=>"success", "message"=>"Successfully updated password."]);
        }else{
            return response()->json(["status"=>"error", "message"=>"Failed to update password."]);
        }
    }

    public function check_token(){
        $ua = $_SERVER['HTTP_USER_AGENT'];
        $parser = Parser::create();
        $result = $parser->parse($ua);
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return response()->json(["ua"=>$result->ua->toString(), "os" => $result->os->toString(), "device" => $result->device->family, "ip" => $ip]);
    }
}
