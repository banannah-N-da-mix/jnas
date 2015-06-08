//This document!
//Another Comment!!
$( document ).ready(function() {
    console.log( "ready!" );
    var div = $(".main-jumbo");
    div.animate({
    "background-position-x": "0%",
    "background-position-y": "100%"},  10000, 'linear');
});
