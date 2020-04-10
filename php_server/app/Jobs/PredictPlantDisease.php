<?php

namespace App\Jobs;

use App\Models\PlantImage;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class PredictPlantDisease implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $plantImage;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(PlantImage $plantImage)
    {
        $this->plantImage = $plantImage;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $baseimage = 'data:image/jpeg;base64,' . base64_encode(file_get_contents($this->plantImage->getFirstMedia('plant_images')->getPath()));

        $client = new \GuzzleHttp\Client();

        $res = $client->post('http://localhost:8000/predict', [
            'multipart' => [
                [
                    'name'     => 'plant_image',
                    'contents' => $baseimage,
                ],
            ],
        ]);


        
        $data = json_decode($res->getBody(), true);

        

        if (isset($data['data'])) {
            $x = explode("___", $data['data']);
            if (isset($x[1]) && $x[1] == 'healthy') {
                \Log::info("Healthy");
            } 
            else {
                $this->plantImage->update([
                    'disease_name' => $x[0],
                    'crop_name' => $x[1],
                    'diseased' => true
                ]);
            } 
        }

        // \Log::info($x); 
    }
}
