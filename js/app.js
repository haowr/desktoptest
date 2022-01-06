

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
        $scope.audio                = new Audio('../term.mp3')
        $scope.bgaudio              = new Audio('../images/web.wav'
        )
        $scope.characterSlider1 = true;
        $scope.chararcterSlider2 = false;
        $scope.characterSlider3 = false;
   
        $scope.playAudio = function(){

            $scope.audio.play()

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
            }

        }
        $scope.openHomeSlider2 = function(){
            console.log("clicked")
        
            if(!$scope.homeSlide2){
                $scope.homeSlide2 = true;
                $scope.homeSlide1 = false;
                $scope.homeSlide3 = false;
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
            $scope.audio.play()
            $scope.menu1 = true;
            $scope.menu2 = false;;
            $scope.menu3 = false;
        }
        $scope.openMenu2 = function(){

            $scope.audio.play()
            $scope.menu2 = true;
            $scope.menu1 = false;
            $scope.menu3 = false;
            
        }
        
        $scope.openMenu3 = function(){

            $scope.audio.play()
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

            console.log("clickeddd")
            $scope.audio.play()
            
            if(!$scope.menuOpen){

                $scope.menuOpen = true;
                $scope.menuListClosed = false;
                var scope = $scope;
                //setTimeout(()=>{

                    $scope.menuItemsOn = true;

                //}, 2000)

            }else{
                var scope = $scope;
                
                $scope.audio.play()
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
                scrollTop: $("#firstDiv").offset().top+25
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


