AOS.init();

$('#services .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        577:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
})


