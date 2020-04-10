<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class PlantImage extends Model implements HasMedia
{
    use HasMediaTrait;

    protected $fillable = ['disease_name', 'user_id', 'name', 'lat', 'lng', 'created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
