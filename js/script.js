jQuery(document).ready(function($){

$("#hamburger-button").click(function(){

if($(this).hasClass('opened')){
    $("nav ul").slideUp();
}else {
    $("nav ul").slideDown();

}

$(this).toggleClass('opened');

});

});