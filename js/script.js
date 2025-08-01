$(window).scroll(function(){
    var x = $(this).scrollTop();

    if( x >= 500){
        $("header").addClass("header-bg");
    }
    else{
        $("header").removeClass("header-bg");
    }
})