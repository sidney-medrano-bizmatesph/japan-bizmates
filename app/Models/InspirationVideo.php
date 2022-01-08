<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspirationVideo extends Model
{
    use HasFactory;
    protected $table = "inspiration_videos";
    public static function getter(){
        return new InspirationVideo;
    }    
}
