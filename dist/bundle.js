var buhalter;(()=>{var e={342:e=>{e.exports={init:function(){let e=document.getElementsByClassName("calculator__btn-group"),t=document.getElementsByClassName("calculator__price")[0],i=[0,0,0];const s=[[[[3500],[5e3],[8e3]],[[8e3],[1e4],[12e3]],[[8e3],[1e4],[12e3]]],[[[2500],[2500],[8e3]],[[5e3],[1e4],[12e3]],[[8e3],[1e4],[12e3]]]];for(let n=0;n<e.length;n++)for(let l=0;l<e[n].children.length;l++)e[n].childNodes[2*l+1].addEventListener("click",(function(){e[n].childNodes[2*i[n]+1].classList.remove("active"),i[n]=2*l/2,this.classList.add("active"),t.childNodes[1].textContent="от "+s[i[0]][i[1]][i[2]][0]}))}}},899:e=>{e.exports={init:function(){new Swiper(".comments__slider_lg",{slidesPerView:1,spaceBetween:64,centeredSlides:!0,centeredSlides:!0,speed:400,pagination:{el:".comments__pagination_lg",bulletClass:"dft-pagination__bullet",bulletActiveClass:"active",clickable:!0}}),new Swiper(".comments__slider_md",{slidesPerView:1,spaceBetween:64,centeredSlides:!0,centeredSlides:!0,speed:400,pagination:{el:".comments__pagination_md",bulletClass:"dft-pagination__bullet",bulletActiveClass:"active",clickable:!0}})}}},792:e=>{e.exports={init:function(){let e=document.getElementsByClassName("navigation-btn")[0],t=document.getElementsByClassName("navigation_md__links-wrapper")[0];e.addEventListener("click",(function(){this.classList.toggle("navigation-btn--active"),t.classList.toggle("active")}));let i=document.querySelectorAll("[data-toggle]");for(let e=0;e<i.length;e++){let t=i[e],s=document.querySelectorAll("[data-dropdown='"+t.dataset.toggle+"']")[0];t.addEventListener("focus",(function(e){s.classList.add("active")})),t.addEventListener("keydown",(function(e){e.shiftKey&&9==e.keyCode&&s.classList.remove("active")})),s.getElementsByTagName("a")[s.getElementsByTagName("a").length-1].addEventListener("keydown",(function(e){9==e.keyCode&&s.classList.remove("active")}))}}}},494:e=>{e.exports={init:function(){let e=document.getElementsByClassName("question"),t=document.getElementsByClassName("question__title");for(let i=0;i<t.length;i++){let s=e[i];t[i].addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("active")}))}}}},978:e=>{e.exports={init:function(){document.getElementsByClassName("buh-services__nav")[0],document.getElementsByClassName("buh-services__slider")[0]}}},877:e=>{e.exports={init:function(){let e=new Swiper(".work-timeline__body .swiper-container",{speed:150,slidesPerView:1,effect:"fade",allowTouchMove:!1,fadeEffect:{crossFade:!0}}),t=document.getElementsByClassName("work-timeline__step"),i=document.getElementsByClassName("work-timeline__info"),s=0;for(let n=0;n<t.length;n++){let l=t[n],a=i[n];l.addEventListener("click",(function(){i[s].classList.remove("active"),s=n,a.classList.add("active"),e.slideTo(s);let l=0;for(let e=0;e<=n;e++)t[e].classList.contains("active")?l++:setTimeout((()=>{t[e].classList.add("active")}),150*(e-l));let c=0;for(let e=t.length-1;e>n;e--)t[e].classList.contains("active")?setTimeout((()=>{t[e].classList.remove("active")}),150*(t.length-e-c-1)):c++}))}}}}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,i),l.exports}(()=>{const e=i(792),t=i(342),s=i(978),n=i(494),l=i(899),a=i(877);e.init(),t.init(),s.init(),n.init(),l.init(),a.init();let c=new Swiper(".service-main__slider",{slidesPerView:1,speed:400,effect:"fade",allowTouchMove:!1,fadeEffect:{crossFade:!0},pagination:{el:".service-main__pagination",bulletClass:"dft-pagination__bullet",bulletActiveClass:"active",clickable:!0},on:{slideChange:function(){o.slideTo(this.activeIndex)}}}),o=new Swiper(".service-main__gallery-slider",{slidesPerView:1,speed:400,spaceBetween:48,allowTouchMove:!1,breakpoints:{601:{slidesPerView:2},1025:{slidesPerView:3}}});c._slidePrev=function(){c.slidePrev()},c._slideNext=function(){c.slideNext()},document.getElementsByClassName("service-main__button_left")[0].addEventListener("click",c._slidePrev),document.getElementsByClassName("service-main__button_right")[0].addEventListener("click",c._slideNext)})(),buhalter={}})();