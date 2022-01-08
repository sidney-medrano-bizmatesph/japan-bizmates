<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OurTeamMember extends Model
{
    use HasFactory;
    protected $table = "our_team_members";

    public static function getter(){
        return new OurTeamMember;
    }
}
