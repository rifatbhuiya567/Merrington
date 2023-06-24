/* 
----------------
Table Of Content
----------------
1. Sticky Navbar JS Start
2. Banner Slide JS Start
*/

$(window).scroll(function(){
    var scrolling = $(this).scrollTop(),
        navbar = document.querySelector(".main-header"),
        mobile_navbar = document.querySelector(".mobile-header");

    if( scrolling > 40){
      $(navbar).addClass("nav-anim");
    }
    else{
      $(navbar).removeClass("nav-anim");
    }

    if( scrolling > 40){
      $(mobile_navbar).addClass("nav-anim");
    }
    else{
      $(mobile_navbar).removeClass("nav-anim");
    }
});
// Sticky Navbar JS End

function mainBannerSlide() {
    var banners = $(".banner-slide");

    banners.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        dots: true,
        fade: true,
        prevArrow: '.prev',
        nextArrow: '.next',
    });
}
mainBannerSlide();
// Banner Slide JS End