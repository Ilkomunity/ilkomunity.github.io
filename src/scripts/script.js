$(document).ready(function(){
    // Initialize the original owl-carousel
    $(".owl-carousel-achievement").owlCarousel({
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
    $(".owl-carousel-showcase").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false, 
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        slideBy: 3,
        mouseDrag: false,
        navText: [
            "<img src='showcase-products-arrow-left.svg'>",
            "<img src='showcase-products-arrow-right.svg'>"
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
        $(".owl-carousel-review").owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false, 
            autoplay:false,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            slideBy: 5,
            mouseDrag: false,
            navText: [
                "<img src='arrow-left.svg'>",
                "<img src='arrow-right.svg'>"
            ],
            responsive:{
                0:{
                    items:2,
                },
                768:{
                    items:3,
                    margin: 5
                },
                1024:{
                    items:5
                }
            }
        });
});
