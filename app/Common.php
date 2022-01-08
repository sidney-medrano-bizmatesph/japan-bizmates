<?php

namespace App;

use Illuminate\Http\Request;

class Common
{
    //
    public static function mailSetter($e,$password = ""){ //e = email, s = suffix
        $email = $e;
        
        // Setup your gmail mailer
        $transport = new \Swift_SmtpTransport('smtp.gmail.com', 587, 'tls');
        $transport->setUsername($email);
        $transport->setPassword($password);

        $gmail = new \Swift_Mailer($transport);
        // Set the mailer as gmail
        \Mail::setSwiftMailer($gmail);
    }
    public static function useDefault($value, $alt = "N/A"){
        if(!empty($value)){
            return $value;
        }else if ($alt != ""){
            return $alt;
        }
    }

    public static function generateRandom($uniqueTable = "", $column = "",$numberOfStrings = 5){
        $token = \Str::random($numberOfStrings);

        if($uniqueTable != "" && $column != ""){
            $validator = \Validator::make([$column=>$token], [$column=>"unique:$uniqueTable"]);

            if($validator->fails()){
                return self::generateRandom($uniqueTable,$numberOfStrings);
            }
        }

        return $token;        
    }

    public static function all(Request $request, $queryResult, $returnArray = false, $paginate = true){
         
        if(isset($request->filter)){
            foreach($request->filter as $filterItem){
                $value = $filterItem["searchValue"];
                $filterType = explode(" ", $filterItem["type"]);
                $filter = $filterNot = "";
                if(count($filterType) > 1){
                    $filter = $filterType[1];
                    $filterNot = "NOT ";
                }else{
                    $filter = $filterType[0];
                }

                switch($filter){
                    case "begins" :
                        $value = $value . "%";
                        break;
                    case "ends":
                        $value = "%".$value;
                        break;
                    case "contains":
                        $value = "%" . $value . "%";
                        break;
                }


                if( isset($filterItem["DBRaw"]) && isset($filterItem["fieldType"]) && $filterItem["fieldType"] == "date"){
                    $searchField = "DATE_FORMAT({$filterItem["searchField"]}, '%m-%d-%Y')";
                    $deliveries = $deliveries->whereRaw("$searchField LIKE '$value'");
                }
                else if(isset($filterItem["DBRaw"]) && $filterItem["DBRaw"] != ""){
                    if(strpos($filterItem["DBRaw"], 'SUM') !== false ){
                        $queryResult = $queryResult->having(\DB::raw($filterItem["DBRaw"]), $filterNot."LIKE", $value);
                    }else{
                        $queryResult = $queryResult->where(\DB::raw($filterItem["DBRaw"]), $filterNot."LIKE", $value);
                    }
                }else{
                    $queryResult = $queryResult->where($filterItem["searchField"], $filterNot."LIKE", $value);
                }
            }
        }

        if(isset($request->additionalParameters)){
            foreach($request->additionalParameters as $additionalParameter){
                $value = $additionalParameter["where"];

            
                $filterType = explode(" ", $additionalParameter["filterType"]);
                $filter = $filterNot = "";
                if(count($filterType) > 1){
                    $filter = $filterType[1];
                    $filterNot = "NOT ";
                }else{
                    $filter = $filterType[0];
                }

                switch($filter){
                    case "begins" :
                        $value = $value . "%";
                        break;
                    case "ends":
                        $value = "%".$value;
                        break;
                    case "contains":
                        $value = "%" . $value . "%";
                        break;
                }

                if(isset($additionalParameter["DBRaw"])){
                    $queryResult = $queryResult->where(DB::raw($additionalParameter["DBRaw"]), $filterNot."LIKE", $value);
                }else{
                    $queryResult = $queryResult->where($additionalParameter["searchField"], $filterNot."LIKE", $value);
                }
            }
        }

        $count = clone $queryResult;

        if(isset($request->order)){
            foreach($request->order as $key => $order){
                
                $queryResult=$queryResult->orderBy(isset($order["sort"]) ? $order["sort"] : $key, $order["type"]);
            }
        }

        if(isset($request->page) && isset($request->rowsPerPage) && $request->rowsPerPage > 0 && $paginate){
            $queryResult = $queryResult->offset($request->page * $request->rowsPerPage)->limit($request->rowsPerPage);
        }

        return 
            $returnArray ? 
                ["result"=>$queryResult->get(), "count"=>$count->get()->count()]
                : 
                response()->json(["result"=>$queryResult->get(), "count"=>$count->get()->count()]);
    }
}
