$(window).scroll(function(){
    var x = $(this).scrollTop();

    if( x >= 50){
        $("header").addClass("header-bg");
    }
    else{
        $("header").removeClass("header-bg");
    }
})
$(document).ready(function(){
    $('.toggle-bt').click(function(){
    $('.toggle-bt').toggleClass('clicked');

    });
})