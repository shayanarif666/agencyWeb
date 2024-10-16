
// function To Handle Slides
const sliderHandler = () => {
    new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 4,
        autoplay: true,
        initialSlide: 2,
        preventClicks: true,
        speed: 600,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },

        breakpoints: {
            993: {
                slidesPerView: 3,
                initialSlide: 3,
            },
            // For screens between 1200px and 769px
            576: {
                slidesPerView: 2,
                initialSlide: 2,
            },
            // For screens 768px and below
            0: {
                slidesPerView: 1,
                initialSlide: 1,
            }
        }
    });
}


sliderHandler();