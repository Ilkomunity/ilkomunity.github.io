// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false, 
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2
            },
            1024:{
                items:3,
                center: true
            }
        }
    });
});
