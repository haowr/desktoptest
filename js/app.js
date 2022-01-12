

(function () {


    var app = angular.module('store', []);



    app.config(function ($httpProvider) {

    });

    app.controller('mainCtrl', ['$http', '$scope', '$timeout',  '$interval', '$window', function ($http, $scope, $timeout, $interval, $window) {

        $scope.chapelOpen           = true;
        $scope.soundOpen            = false;
        $scope.shopOpen             = false;
        $scope.lightsPageOpen       = false;
        $scope.contactPageOpen      = false;
        $scope.zoomPageOpen         = false;
        $scope.volumeOn             = false;
        $scope.zoomPageOpen         = false;
        $scope.contactPageOpen      = false;
        $scope.soundPageOpen        = false;
        $scope.lightPageOpen        = false;
        $scope.menuOpen              = false;
        $scope.homePageOpen         = true;
        $scope.menuItemsOn          = false;
        $scope.menuListClosed       = true;
        $scope.menu1                = false;
        $scope.menu2              = false;
        $scope.menu3              = false;
        $scope.homeSlide1           = true;
        $scope.homeSlide2           = false;
        $scope.homeSlide3          = false;
        $scope.audioOnIcon            = false;
        $scope.audioOffIcon            = true;
        $scope.infoSlide1       = true;
        $scope.infoSlide2   = false;
        $scope.homeButton2 = false;
        $scope.infoButton2 = false;
        $scope.characterButton1 = true;
        $scope.characterButton2 = false;
        $scope.characterButton3 = false;
       

        $scope.openInfoSlide1 = function(){

            $scope.infoSlide2 = false;;
            $scope.infoSlide1 = true
            $scope.infoButton2  = false;

        }
        $scope.openInfoSlide2 = function(){

            $scope.infoSlide1 = false;;
            $scope.infoSlide2 = true
            $scope.infoButton2 = true;

        }
        $scope.openCharacterSlide1 = function(){

            $scope.characterSlide1 = true;
            $scope.characterSlide2 = false;
            $scope.characterSlide3 = false;
            $scope.characterButton1 = true;
            $scope.characterButton2= false;
            $scope.characterButton3= false;

        }
        $scope.characterSlide1 = true;
        $scope.characterSlide2 = false;
        $scope.characterSlide3 = false;
        $scope.openCharacterSlide3 = function(){

            $scope.characterSlide3 = true;
            $scope.characterSlide1 = false;
            $scope.characterSlide2 = false;
            $scope.characterButton3 = true;
            $scope.characterButton1= false;
            $scope.characterButton2= false;
            

        }        
        $scope.openCharacterSlide2= function(){

            $scope.characterSlide2 = true;
            $scope.characterButton2 = true;
            $scope.characterButton1= false;
            $scope.characterButton3= false;
            $scope.characterSlide1 = false;
            $scope.characterSlide3 = false;
            

        }
        $scope.audio                = new Audio('../term.mp3')
        $scope.audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        $scope.bgaudio              = new Audio('../images/web.wav'
        )
        $scope.characterSlider1 = true;
        $scope.chararcterSlider2 = false;
        $scope.characterSlider3 = false;
   
        $scope.playAudio = function(){

            $scope.audio.play()
            $scope.audioOffIcon = false;
            $scope.audioOnIcon = true;

        }
        $scope.stopAudio = function(){

            $scope.audio.pause()
            $scope.audioOffIcon = true;
            $scope.audioOnIcon = false;

        }
        $scope.openCharacterSlider1 = function(){
            console.log("clicked")

            if(!$scope.characterSlider1){
                $scope.characterSlider1 = true;
                $scope.characterSlider2 = false;
                $scope.characterSlider3 = false;
            }

        }
        $scope.openCharacterSlider2 = function(){
            console.log("clicked")

            if(!$scope.chararcterSlider2){
                $scope.characterSlider2 = true;
                $scope.characterSlider1 = false;
                $scope.characterSlider3 = false;
            }

        }
        $scope.openCharacterSlider3 = function(){
            console.log("clicked")

            if(!$scope.characterSlider3){
                $scope.characterSlider3 = true;
                $scope.characterSlider2 = false;
                $scope.characterSlider1 = false;
            }

        }
        $scope.infoSlider1 = true;
        $scope.infoSlider2 = false;
        $scope.openInfoSlider1 = function(){
            console.log("clicked")

            if(!$scope.infoSlider1){
                $scope.infoSlider1 = true;
                $scope.infoSlider2 = false;
            }

        }
        $scope.openInfoSlider2 = function(){
            console.log("clicked")

            if(!$scope.infoSlider2){
                $scope.infoSlider2 = true;
                $scope.infoSlider1 = false;
            }

        }
        $scope.openCharacterSlider3 = function(){
            console.log("clicked")

            if(!$scope.characterSlider3){
                $scope.characterSlider3 = true;
                $scope.characterSlider2 = false;
                $scope.characterSlider1 = false;
            }

        }
        $scope.openCharacterSlider3 = function(){
            console.log("clicked")

            if(!$scope.characterSlider3){
                $scope.characterSlider3 = true;
                $scope.characterSlider2 = false;
                $scope.characterSlider1 = false;
            }

        }
        $scope.openHomeSlider1 = function(){
            console.log("clicked")

            if(!$scope.homeSlide1){
                $scope.homeSlide1 = true;
                $scope.homeSlide2 = false;
                $scope.homeSlide3 = false;
                $scope.homeButton2 = false;
            }

        }
        $scope.openHomeSlider2 = function(){
            console.log("clicked")
        
            if(!$scope.homeSlide2){
                $scope.homeSlide2 = true;
                $scope.homeSlide1 = false;
                $scope.homeSlide3 = false;
                $scope.homeButton2 = true;

            }

        }
        
        $scope.openHomeSlider3 = function(){
            console.log("clicked")
            if(!$scope.homeSlide3){
                $scope.homeSlide3 = true;
                $scope.homeSlide2 = false;
                $scope.homeSlide1 = false;
            }

        }
        $scope.openShopPage = function(){

           // $scope.bgaudio.play()

        }

  
        $scope.openMenu1 = function(){
            console.log("menu1")
           // $scope.audio.play()
            $scope.menu1 = true;
            $scope.menu2 = false;;
            $scope.menu3 = false;
        }
        $scope.openMenu2 = function(){

           // $scope.audio.play()
            $scope.menu2 = true;
            $scope.menu1 = false;
            $scope.menu3 = false;
            
        }
        
        $scope.openMenu3 = function(){

          //  $scope.audio.play()
            $scope.menu2 = false;
            $scope.menu1 = false;
            $scope.menu3 = true;
            
        }
        console.log("WE OUT HERE!")
        $scope.openShopPage()

        $scope.toggleMusic = function(){

            if(!$scope.volumeOn){

                $scope.volumeOn = true;
               // $scope.bgaudio.play()

            }else{

                $scope.volumeOn = false;
            }

        }

        $scope.closeZoomPage = function(){

            if(!$scope.zoomPageOpen){

                $scope.zoomPageOpen = true;

            }else{

                $scope.zoomPageOpen = false;

            }
        }
        $scope.openMenu= function(){

           // console.log("clickeddd")
            $scope.audio.pause()
            if(!$scope.menuOpen){

                $scope.menuOpen = true;
                $scope.menuListClosed = false;
                var scope = $scope;
                //setTimeout(()=>{

                    $scope.menuItemsOn = true;

                //}, 2000)

            }else{
                var scope = $scope;
                
               // $scope.audio.play()
                $scope.menuItemsOn = false;
                $scope.menuListClosed = true;

               // setTimeout(()=>{

                    $scope.menuOpen = false;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;
                    console.log($scope.menuOpen)

               // }, 1000)
                
               // $scope.menuOpen = false;
            }
        }
        $scope.clickTest= function(){

            console.log("clicked")
            $('html, body').animate({
                scrollTop: $("#firstDiv").offset().top+35
            }, 1000);
        }
        $scope.goToCharacterPage= function(){

             console.log("clicked")
            $('html, body').animate({
                scrollTop: $("#characters").offset().top
            }, 1000);
            $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;
        }
        $scope.goToSecondDiv= function(){

            console.log("clicked")
           $('html, body').animate({
               scrollTop: $("#secondDiv").offset().top
           }, 1000);
           $scope.menuOpen = false;
           $scope.menuListClosed = true;
                   $scope.menu1 = false;
                   $scope.menu2 = false;
                   $scope.menu3 = false;
       }
       $scope.goToThirdDiv= function(){

        console.log("clicked")
       $('html, body').animate({
           scrollTop: $("#thirdDiv").offset().top
       }, 1000);
       $scope.menuOpen = false;
       $scope.menuListClosed = true;
               $scope.menu1 = false;
               $scope.menu2 = false;
               $scope.menu3 = false;
   }
   $scope.goToFourthDiv= function(){
    console.log("clicked")
       $('html, body').animate({
           scrollTop: $("#thirdDiv").offset().top-30
       }, 1000);
       $scope.menuOpen = false;
       $scope.menuListClosed = true;
               $scope.menu1 = false;
               $scope.menu2 = false;
               $scope.menu3 = false;

   }
   $scope.goToRoadMapPage = function(){

    console.log('clicked roadmap')
    $('html, body').animate({
        scrollTop: $("#roadmap").offset().top
    }, 1000); 
         $scope.menuOpen = false;
    $scope.menuListClosed = true;
            $scope.menu1 = false;
            $scope.menu2 = false;
            $scope.menu3 = false;
}
$scope.goToRoadMapPageMobile = function(){

    console.log('clicked')
    $('html, body').animate({
        scrollTop: $("#roadmap-mobile").offset().top
    }, 1000); 
         $scope.menuOpen = false;
    $scope.menuListClosed = true;
            $scope.menu1 = false;
            $scope.menu2 = false;
            $scope.menu3 = false;
}
        $scope.goToNftPage = function(){

            console.log('clicked')
            $('html, body').animate({
                scrollTop: $("#nft").offset().top
            }, 1000); 
                 $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;
        }
        $scope.goToNftPageMobile = function(){

            console.log('clicked')
            $('html, body').animate({
                scrollTop: $("#nftmobile").offset().top
            }, 1000); 
                 $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;
        }
        $scope.goToInfoPageMobile = function(){

            console.log('clicked')
            $('html, body').animate({
                scrollTop: $("#infopagemobile").offset().top
            }, 1000); 
                 $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;
        }
        $scope.goToContactPage = function(){
 $('html, body').animate({
                scrollTop: $("#contactpage").offset().top
            }, 1000); 
                  $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;

        }
        $scope.goToContactPageMobile = function(){
            $('html, body').animate({
                           scrollTop: $("#contactpagemobile").offset().top
                       }, 1000); 
                             $scope.menuOpen = false;
                       $scope.menuListClosed = true;
                               $scope.menu1 = false;
                               $scope.menu2 = false;
                               $scope.menu3 = false;
           
                   }
               $scope.openInfoPage = function(){
 $('html, body').animate({
                scrollTop: $("#firstDiv").offset().top
            }, 1000); 
                  $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;

        }
          $scope.goToHome = function(){
 $('html, body').animate({
                scrollTop: $("#goToHome").offset().top-100 
            },500); 
                  $scope.menuOpen = false;
            $scope.menuListClosed = true;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;

        }
        
      //$scope.goToHome()
     //   $scope.clickTest()
        $scope.openContactPage     = function(){

                if(!$scope.contactPageOpen){

                    $scope.contactPageOpen      = true;
                    $scope.homePageOpen         = false;
                    $scope.soundOpen            = false;
                    $scope.soundPageOpen        = false;
                    $scope.lightsPageOpen       = false;

                }

        }
        


    }]);


}());


