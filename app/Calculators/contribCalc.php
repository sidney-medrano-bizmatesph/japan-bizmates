<?php

namespace App\Calculators;

use App\Models\SSSSelfEmployed;
use App\Models\SSSPerm;
use App\Models\GSISPrem;
use App\Models\PHICTable;
use App\Models\PagibigTable;


class contribCalc{


    public static function gsis($salary){

        $gsis_prem = GSISPRem::where('id', 1)->first();
        $ee_deduct = $gsis_prem['personal_share']/100;
        $er_deduct = $gsis_prem['government_share']/100;
        $gsis_ee = $salary*$ee_deduct;
        $gsis_er = $salary*$er_deduct;

        return array(
            "ee"=>round($gsis_ee,2), 
            "er"=>round($gsis_er,2)
        );
    }
    
    public static function sss_regular($salary){

            $sss = SSSPerm::select([
                        'sss_perm.*',
                        \DB::raw('CAST(from_range AS float) as from_range'),
                        \DB::raw('CAST(to_range AS float) as to_range')
                    ])
                    ->where(\DB::raw('CAST(from_range AS float)'),'<=',$salary)
                    ->where(\DB::raw('CAST(to_range AS float)'),'>',$salary)
                    ->first();
                    
            return array("ee"=>round($sss['ee'],2),"er"=>round( $sss['er'],2),"ec"=>round($sss['ec'],2));         
    }

    public static function sss_selfpay($salary){
            $sss = SSSSelfEmployed::where('from_range','<=',$salary)
                    ->where('to_range','>=',$salary)
                    ->first();

             return array("ee"=>round($sss['ee'],2),"er"=>round( $sss['er'],2),"ec"=>round($sss['ec'],2));          
    }

    public static function philhealth($salary){
        
            $phic = PHICTable::where('id', 1)->first();

            $decimal_prem_rate = $phic['prem_rate']/100;
            $total = $salary*$decimal_prem_rate;
            $monthly_premium = $total;

            $quo = $monthly_premium/2;

            if($quo > 900){
                $quo = 900;
            }

            $phic_ee = round($quo,2);
            $phic_er = round($quo,   2);
           
             return array("ee"=>$phic_ee, "er"=>$phic_er);
    }


    public static function pagibig($salary){

       $pagibig = PagibigTable::where('monthly_from','<=',$salary)
        ->where('monthly_to','>=',$salary)
        ->first();

       $ee_deduct = $pagibig['ee']/100;
       $er_deduct = $pagibig['er']/100;

       $ee = $salary*$ee_deduct;
       $er = $salary*$er_deduct;

       if($ee > 300){
        $ee = 300;
       }

       if($er > 300){
        $er = 300;
       }
       
        
        return array("ee"=>round($ee,2), "er"=>round($er,2));
    }

   


}

?>