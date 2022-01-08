<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentPartnerItem extends Model
{
    use HasFactory;
    protected $table = "content_partner_items";

    public static function getter(){
        return new ContentPartnerItem;
    }
}
