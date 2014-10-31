$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('.sa-nav').addClass("shrink");
        $('.navbar').addClass("shrink");
        $('.navbar-toggle').addClass("shrink");
    }
    else{
        $('.sa-nav').removeClass("shrink");
        $('.navbar').removeClass("shrink");
        $('.navbar-toggle').removeClass("shrink");
    }
});