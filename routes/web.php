<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\VisionController;
use App\Http\Controllers\MissionController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\FutureOfferingsController;
use App\Http\Controllers\ContentPartnersController;
use App\Http\Controllers\FooterController;
use App\Http\Controllers\OurTeamController;
use App\Http\Controllers\SubscriptionListController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get("/{any}", function(){
    return view('index');
})->where('any', '.*');

Route::group(['middleware' => ['jwt.authentication', 'jwt.auth']], function(){

    //HOME
    Route::post("/home-initialize", [HomeController::class, "initialize"]);
    Route::post("/home-cms", [HomeController::class, "homeCMS"]);

    //FEATURES
    Route::post("/features-initialize", [HomeController::class, "featuresInitialize"]);
    Route::post("/features-cms", [HomeController::class, "featuresCMS"]);

    //EVENTS
    Route::post("/event-initialize", [HomeController::class, "eventInitialize"]);
    Route::post("/event-cms", [HomeController::class, "eventCMS"]);
    Route::post("/get-events", [HomeController::class, "getEvents"]);
    Route::post("/delete-event", [HomeController::class, "deleteEvent"]);
    Route::post("/add-event", [HomeController::class, "addEvent"]);
    Route::post("/rename-event", [HomeController::class, "renameEvent"]);
    
    //STUDY GUIDE
    Route::post("/study-guide-initialize", [HomeController::class, "studyGuideInitialize"]);
    Route::post("/study-guide-cms", [HomeController::class, "studyGuideCMS"]);

    Route::post("/add-study-guide-video", [HomeController::class, "addStudyGuideVideo"]);
    Route::post("/get-study-guide-videos", [HomeController::class, "getStudyGuideVideos"]);
    Route::post("/get-study-guide-video", [HomeController::class, "getStudyGuideVideo"]);
    Route::post("/delete-study-guide-video", [HomeController::class, "deleteStudyGuideVideo"]);

    //INSPIRATION
    Route::post("/inspiration-initialize", [HomeController::class, "inspirationInitialize"]);
    Route::post("/inspiration-cms", [HomeController::class, "inspirationCMS"]);

    Route::post("/add-inspiration-video", [HomeController::class, "addInspirationVideo"]);
    Route::post("/get-inspiration-videos", [HomeController::class, "getInspirationVideos"]);
    Route::post("/get-inspiration-video", [HomeController::class, "getInspirationVideo"]);
    Route::post("/delete-inspiration-video", [HomeController::class, "deleteInspirationVideo"]);

    //GENERAL
    Route::post("/general-initialize", [GeneralController::class, "generalInitialize"]);
    Route::post("/general-cms", [GeneralController::class, "generalCMS"]);

    //WELCOME
    Route::post("/welcome-initialize", [WelcomeController::class, "welcomeInitialize"]);
    Route::post("/welcome-cms", [WelcomeController::class, "welcomeCMS"]);

    //VISION
    Route::post("/vision-initialize", [VisionController::class, "visionInitialize"]);
    Route::post("/vision-cms", [VisionController::class, "visionCMS"]);

    //MISSION
    Route::post("/mission-initialize", [MissionController::class, "missionInitialize"]);
    Route::post("/mission-cms", [MissionController::class, "missionCMS"]);

    //ABOUT
    Route::post("/about-initialize", [AboutController::class, "aboutInitialize"]);
    Route::post("/about-cms", [AboutController::class, "aboutCMS"]);

    //FUTURE-OFFERINGS
    Route::post("/future-offerings-initialize", [FutureOfferingsController::class, "futureOfferingsInitialize"]);
    Route::post("/future-offerings-cms", [FutureOfferingsController::class, "futureOfferingsCMS"]);

    Route::post("/future-offerings-upload", [FutureOfferingsController::class, "upload"]);
    Route::post("/delete-unused-images", [FutureOfferingsController::class, "deleteUnusedImages"]);

    //CONTENT PARTNERS
    Route::post("/content-partner-initialize", [ContentPartnersController::class, "initialize"]);
    Route::post("/content-partner-cms", [ContentPartnersController::class, "cms"]);

    Route::post("/add-content-partner-item", [ContentPartnersController::class, "create"]);
    Route::post("/get-content-partner-items", [ContentPartnersController::class, "all"]);
    Route::post("/get-content-partner-item", [ContentPartnersController::class, "get"]);
    Route::post("/delete-content-partner-item", [ContentPartnersController::class, "delete"]);

    //FOOTER
    Route::post("/footer-initialize", [FooterController::class, "initialize"]);
    Route::post("/footer-cms", [FooterController::class, "cms"]);

    //OUR TEAM
    Route::post("/our-team-initialize", [OurTeamController::class, "initialize"]);
    Route::post("/our-team-cms", [OurTeamController::class, "cms"]);

    Route::post("/add-our-team-member", [OurTeamController::class, "create"]);
    Route::post("/get-our-team-members", [OurTeamController::class, "all"]);
    Route::post("/get-our-team-member", [OurTeamController::class, "get"]);
    Route::post("/delete-our-team-member", [OurTeamController::class, "delete"]);

    //SUBSCRIPTION LIST
    Route::post("/subscription-list-initialize", [SubscriptionListController::class, "initialize"]);
    Route::post("/subscription-list-cms", [SubscriptionListController::class, "cms"]);

    Route::post("/add-subscription-list-item", [SubscriptionListController::class, "create"]);
    Route::post("/get-subscription-list-items", [SubscriptionListController::class, "all"]);
    Route::post("/get-subscription-list-item", [SubscriptionListController::class, "get"]);
    Route::post("/delete-subscription-list-item", [SubscriptionListController::class, "delete"]);
});
