$(document).ready(function(){
    // Initialize the original owl-carousel
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

    // Add a new class to this script
    $(".owl-carousel").addClass("custom-owl-carousel");

    // Initialize the custom settings for the new class
    $(".custom-owl-carousel").owlCarousel({
        loop:true,
        margin:20, // Customize margin
        nav:true, // Enable navigation arrows
        dots:true, // Enable dots navigation
        autoplay:true,
        autoplayTimeout:5000, // Customize autoplay timeout
        autoplayHoverPause:true,
        navText: [
            "<i class='fa fa-chevron-left'></i>", // Customize left arrow icon
            "<i class='fa fa-chevron-right'></i>" // Customize right arrow icon
        ],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2
            },
            1024:{
                items:4, // Customize the number of items to display
                center: false // Disable center mode
            }
        }
    });
});
