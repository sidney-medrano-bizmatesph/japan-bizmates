<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionListItem extends Model
{
    use HasFactory;
    protected $table = "subscription_list";
    public $timestamps = false;
    public static function getter(){
        return new SubscriptionListItem;
    }
}
