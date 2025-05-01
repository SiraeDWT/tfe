"use strict";

import '../css/app.css';
import '../scss/app.scss';


import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);


// Sticky nav
let oldScrollY = 0;
const menu = document.querySelector('.menu');

const mediaQuery = window.matchMedia('(min-width: 1024px)');

if(mediaQuery.matches){
    window.addEventListener('scroll', scrollListener);
}

function scrollListener() {
    if(oldScrollY > window.scrollY){
        menu.classList.remove('menu--hide');
    } else{
        menu.classList.add('menu--hide');
    }
    oldScrollY = window.scrollY;
}

mediaQuery.addEventListener('change', (e) => {
    if(e.matches){
        window.addEventListener('scroll', scrollListener);
    } else{
        window.removeEventListener('scroll', scrollListener);
    }
});


// Button top
window.addEventListener('scroll', function(){
    const button = document.querySelector('.top');

    if(button){
        if (window.scrollY > 250) {
            button.classList.remove('top--hide');
            button.classList.add('top--show');
        } else {
            button.classList.remove('top--show');
            button.classList.add('top--hide');
        }
    }
});


// GSAP
const index = document.querySelector('.home');
const transition = document.querySelector('#transition');

const tl = gsap.timeline();
const mm = gsap.matchMedia();

if(transition){
    tl.fromTo("#transition p", 
        { x: "-500%", display: "block" }, 
        { x: "0", duration: 1, ease: "power4.out" }
        )
    .to("#transition p", { 
        fontSize: "2560px", 
        duration: 0.4, 
        ease: "power4.in" 
    })
    .to("#transition", { 
        opacity: 0, 
        duration: 0.1, 
        onComplete: () => {
            document.getElementById("transition").style.display = "none";
        }
    });
}

// Mobile
mm.add("(max-width: 1439px)", () => {
    
});

// Desktop
mm.add("(min-width: 1440px)", () => {
    if(index){
        // Home intro transition
        tl.from("#lh-img-01", {
            x: '-10%',
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        })
        .from("#lh-img-02", {
            x: '-10%',
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        }, "+=0.2")
        .from("#silver-arrow-01", {
            x: '-10%',
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        })
        .from(".home__content", {
            x: '10%',
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    

        // Home citation animation
        gsap.from(".citation__text", {
            duration: 4,
            text: "",
            ease: "none",
            delay: 0.4,
            scrollTrigger: {
                trigger: '.citation',
                start: 'top 40%',
            }
        });

        gsap.from(".citation__lh", {
            duration: 0.7,
            ease: "cubic-bezier(.4, 0, .2, 1)",
            delay: 4.4,
            opacity: 0,
            scrollTrigger: {
                trigger: '.citation',
                start: 'top 40%',
            }
        });


        // Home presentation transition
        gsap.from('.presentation__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__text', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__btn', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__right', {
            y: '-15%',
            duration: 1.4,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });


        // Home score scroll transition
        gsap.from('.score__btn', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.score',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        const titles = gsap.utils.toArray('.score__title');

        gsap.set(titles, { opacity: 0, x: 100 });

        let tlScore = gsap.timeline({
            scrollTrigger: {
                trigger: ".score",
                start: "top top",
                end: `+=${(titles.length - 1) * 200 + 100}%`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                markers: false
            }
        });

        titles.forEach((title, i) => {
            tlScore.to(title, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "elastic.out(1,0.3)",
            });

            if(i < titles.length - 1){
                tlScore.to(title, {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "elastic.out(1,0.3)",
                }, "+=0.5");
            }
        });

        const path = document.querySelector('#scorePath');
        const pathLength = path.getTotalLength();


        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: -pathLength
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 7,
            ease: "power2.out",
            scrollTrigger: {
            trigger: ".score",
            start: "top 80%",
            toggleActions: "play none none none",
            }
        });


        // Home cars transitions
        gsap.from('.cars__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.cars',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.cars__text', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.cars',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.cars__btn', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.cars',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.cars__right', {
            x: '15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.cars',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });
    }
});

// Intro animation timeline
tl.from(".intro-animation__start p", {
    duration: 3,
    text: "",
    ease: "cubic-bezier(.4, 0, .2, 1)",
    delay: 0.5,
    opacity: 0,
});

tl.to(".intro-animation__start p", {
    opacity: 0,
    duration: 0.5,
}, "+=1");

tl.from(".intro-animation__title span", {
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    autoAlpha: 0,
    y: "25%"
});

tl.to(".intro-animation__title span", {
    opacity: 0,
    duration: 0.5,
    x: "25%",
    stagger: 0.2
}, "+=1");

tl.to(".intro-animation__annonce", {
    display: "none",
});

tl.from(".intro-animation__parallax", {
    opacity: 0,
    ease: "cubic-bezier(.4, 0, .2, 1)",
    y: "100%",
    duration: 0.2,
});

tl.from(".intro-animation__logo", {
    opacity: 0,
    x: "-100%",
    ease: "power2.in",
    duration: 0.5,
}, "+=0.2");

tl.to(".intro-animation__logo", {
    opacity: 0,
    x: "100%",
    ease: "power2.out",
    display: "none",
    duration: 0.5,
},);

tl.to(".intro-animation__parallax", {
    opacity: 0,
    ease: "cubic-bezier(.4, 0, .2, 1)",
    display: "none",
    duration: 0.2,
});

tl.from(".parcours", {
    opacity: 0,
    duration: 0.5,
    display: "none",
});

tl.from(".parcours__title--mclaren", {
    opacity: 0,
    x: "-15%",
    //overflow: "hidden",
    //stagger: 0.2,
});

tl.from(".parcours__text", {
    opacity: 0,
    display: "none",
    x: "-15%",
    stagger: 0.2,
});


// Parcours carousel img
document.querySelectorAll('.parcours__carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.parcours__slide'));
    let currentIndex = 0;

    gsap.set(slides, { xPercent: (i) => i * 100 });

    function goToSlide(index) {
        const total = slides.length;
        console.log(total);
        const newIndex = (index + total) % total;
        gsap.to(slides, {
            duration: 0.6,
            xPercent: (i) => (i - newIndex) * 100,
            ease: 'power1.out'
        });
        currentIndex = newIndex;
    }

    carousel.querySelector('.parcours__btn--next')
            .addEventListener('click', () => goToSlide(currentIndex + 1));

    carousel.querySelector('.parcours__btn--prev')
            .addEventListener('click', () => goToSlide(currentIndex - 1));
});
