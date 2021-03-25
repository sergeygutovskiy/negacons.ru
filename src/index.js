const navigation      = require("./_navigation.js");
const calculator      = require("./_calculator.js");
const service_info    = require("./_service_info.js");
const questions       = require("./_questions.js");
const comments        = require("./_comments.js");
const work            = require("./_work.js");

navigation.init();
calculator.init();
service_info.init();
questions.init();
comments.init();
work.init();



//

let service_main_slider = new Swiper('.service-main__slider', {
    slidesPerView: 1,
    speed: 400,
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".service-main__pagination",
        bulletClass: "dft-pagination__bullet",
        bulletActiveClass: "active",
        clickable: true
    },
    on: {
        slideChange: function() {
            service_main_gallery_slider.slideTo(this.activeIndex);
        },
    },
});

let service_main_gallery_slider = new Swiper('.service-main__gallery-slider', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 48,
    allowTouchMove: false,
    breakpoints: {
        601: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        },
    }
});

service_main_slider._slidePrev = function() {
    service_main_slider.slidePrev();
}

service_main_slider._slideNext = function() {
    service_main_slider.slideNext();
}

document.getElementsByClassName("service-main__button_left")[0].addEventListener("click", service_main_slider._slidePrev);
document.getElementsByClassName("service-main__button_right")[0].addEventListener("click", service_main_slider._slideNext);