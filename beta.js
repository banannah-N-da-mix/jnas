//This document!
//Another Comment!!
$( document ).ready(function() {
    console.log( "ready!" );
  
    function loopAnimate(){
      $(".main-jumbo").animate({"background-position-y": "100%"}, 12000,function(){
            $(this).css({'background-position': '0% 0%'});
        });
        loopAnimate();
    }
  
    loopAnimate();
});
