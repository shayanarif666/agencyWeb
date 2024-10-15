let slidesPerView = 4;

// function To Handle Slides
const sliderHandler = () => {
    new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: slidesPerView,
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
    });
}


const handleScreenWidth = (e) => {
    if (e.target.innerWidth > 1400) {
        slidesPerView = 4;
        sliderHandler();
    } else if (e.target.innerWidth <= 1400 && e.target.innerWidth > 1200) {
        slidesPerView = 3;
        sliderHandler();
    } else if (e.target.innerWidth <= 1200 && e.target.innerWidth > 768) {
        slidesPerView = 2;
        sliderHandler();
    }
    else if (e.target.innerWidth <= 768 && e.target.innerWidth > 500) {
        slidesPerView = 2;
        sliderHandler();
    } else {
        slidesPerView = 1;
        sliderHandler();
    }
}

sliderHandler();
window.addEventListener("resize", handleScreenWidth)