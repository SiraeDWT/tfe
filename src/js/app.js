"use strict";

import '../css/app.css';
import '../scss/app.scss';


import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, ScrollSmoother);

import { initRecordsCharts } from "./components/records.js";


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


// Burger menu
const menuToggle = document.querySelector('.menu--toggle');
const menuIcon = document.getElementById('menu-icon');

const navLink = document.querySelector('.menu__logo');

const svgMenu = `<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>`;
const svgClose = `<path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>`;

if(menuToggle){
    menuToggle.addEventListener('click', menuOpen);  
}

if(navLink){
    navLink.addEventListener('click', closeMenu);
}


function menuOpen() {
    document.body.classList.toggle('menu--open');
    
    let isOpen = document.body.classList.contains('menu--open');

    if (isOpen) {
        menuIcon.innerHTML = svgClose;
        document.body.style.overflow = "hidden";
    } else {
        menuIcon.innerHTML = svgMenu;
        document.body.style.overflow = "";
    }
}

function closeMenu() {
    document.body.classList.remove('menu--open');
    menuIcon.innerHTML = svgMenu;
}


// GSAP
const home = document.querySelector('.body__home');
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


// ScrollSmoother GSAP
if(document.getElementById('smooth-wrapper')) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
        normalizeScroll: true
    });
}

// Mobile
mm.add("(max-width: 1439px)", () => {
    if(home){
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

        .from(".home__content > *", {
            x: '-5%',
            opacity: 0,
            duration: 0.4,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });


        // Home citation transition
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
            x: '-5%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__text', {
            x: '-5%',
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
            x: '-5%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__right', {
            y: '-5%',
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
            x: '-5%',
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
                // end: `+=${(titles.length - 1) * 200 + 100}%`,
                end: `+=${(titles.length - 1) * 150 + 75}%`,
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
            x: '-5%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.cars',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.cars__text', {
            x: '-5%',
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
            x: '-5%',
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

// Desktop
mm.add("(min-width: 1440px)", () => {
    if(home){
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
                // end: `+=${(titles.length - 1) * 200 + 100}%`,
                end: `+=${(titles.length - 1) * 150 + 75}%`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
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



// ----- Parcours page -----
let bodyParcours = document.querySelector('.body__parcours');

if(bodyParcours){
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

    tl.to(".intro-animation__start", {
        display: "none"
    }, "-=0.5");

    tl.call(() => {
        document.querySelectorAll(".parcours").forEach(el => {
            el.classList.remove("hidden");
        });
    });



    tl.call(() => {
        document.querySelectorAll(".parcours").forEach((section, i) => {
            const content = section.querySelector(".parcours__content");
            if (!content) return;

            const fromX = i % 2 === 0 ? "-15%" : "15%";

            gsap.fromTo(content,
                {
                    opacity: 0,
                    x: fromX
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "cubic-bezier(.4, 0, .2, 1)",
                    scrollTrigger: {
                        trigger: content,
                        start: "-30% 40%",
                        toggleActions: "play none none none",
                        once: true,
                        onEnter: () => {
                            const h2 = content.querySelector('.parcours__title');
                            const texts = content.querySelectorAll('.parcours__text');
                            const elements = [h2, ...texts];
                            gsap.from(elements, {
                                opacity: 0,
                                x: fromX,
                                duration: 0.5,
                                stagger: 0.2,
                                ease: "cubic-bezier(.4, 0, .2, 1)"
                            });
                        }
                    }
                }
            );
        });

        ScrollTrigger.refresh();
    });


    // Parcours carousel img
    document.querySelectorAll('.parcours__carousel').forEach((carousel) => {
        const slides = Array.from(carousel.querySelectorAll('.parcours__slide'));
        let currentIndex = 0;

        gsap.set(slides, { xPercent: (i) => i * 100 });

        function goToSlide(index) {
            const total = slides.length;
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
}


// ----- Records page -----
let bodyRecords = document.querySelector('.body__records');

if(bodyRecords){
    const contents = Array.from(document.querySelectorAll(".records__content"));
    const btnPrev = document.querySelector('[data-action="prev"]');
    const btnNext = document.querySelector('[data-action="next"]');
    const points = Array.from(document.querySelectorAll('.map__point'));
    const mapSvg = document.querySelector('.records__map');
    
    const highlightPath = document.getElementById("highlight-path");
    const totalLength = highlightPath.getTotalLength();
    highlightPath.style.strokeDasharray = totalLength;
    highlightPath.style.strokeDashoffset = totalLength;

    const pathProgressByPoint = {
        "point-01": 0,
        "point-02": -5,
        "point-03": -14,
        "point-04": -20,
        "point-05": -32,
        "point-06": -37,
        "point-07": -40,
        "point-08": -51,
        "point-09": -62,
        "point-10": -65,
        "point-11": -68,
        "point-12": -82,
        "point-13": -92,
        "point-14": -95,
    };

    function animatePathToPoint(percent) {
        const offset = totalLength * (1 - percent / 100);
        gsap.to(highlightPath, {
            strokeDashoffset: offset,
            duration: 1.5,
            ease: "power2.out"
        });
    }

    function animateCounter(span, target, duration = 1) {
        const obj = { val: 0 };
        gsap.to(obj, {
            val: target,
            duration: duration,
            ease: "power2.out",
            onUpdate: () => {
                span.textContent = Math.floor(obj.val);
            }
        });
    }

    function getActiveIndex() {
        return points.findIndex(p => p.classList.contains('map__point--active'));
    }

    let previousPointId = null;

    function updateUI(activeIndex){
        points.forEach((p, i) => {
            p.classList.toggle("map__point--active", i === activeIndex);
        });

        const targetPoint = points[activeIndex];
        const targetId = targetPoint.getAttribute("data-id");

        let progress = pathProgressByPoint[targetId] || 0;

        if (targetId === "point-01" && previousPointId === "point-14") {
            progress = -100;
        }

        animatePathToPoint(progress);

        previousPointId = targetId; 

        contents.forEach(content => {
            const isTarget = content.getAttribute("data-id") === targetId;
            content.classList.toggle("hidden", !isTarget);

            if (isTarget) {
                gsap.set(content, {opacity: 1});
                const children = content.querySelectorAll(":scope > *");
                gsap.set(children, {opacity: 0, x: "-20%"});
                gsap.to(children, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "cubic-bezier(.4, 0, .2, 1)",
                    stagger: 0.4,
                });

                const counterSpan = content.querySelector(".records__title--bigger");
                if (counterSpan) {
                    const target = parseInt(counterSpan.dataset.target, 10);
                    if (!isNaN(target)) {
                        counterSpan.textContent = "0";
                        animateCounter(counterSpan, target, 1);
                    }
                }
            }
        });

        const spanNextText = btnNext.querySelector('.btn__text');
        if (activeIndex === 0) {
            btnPrev.style.display = "none";
            spanNextText.textContent = "Démarrer";
            btnNext.classList.add("records__btn--begin");
        } else if (activeIndex === points.length - 1) {
            btnPrev.style.display = "inline-flex";
            spanNextText.textContent = "Terminer le tour";
            btnNext.classList.remove("records__btn--begin");
        } else {
            btnPrev.style.display = "inline-flex";
            spanNextText.textContent = "Avancer";
            btnNext.classList.remove("records__btn--begin");
        }
    }

    function updateNextPointHalo() {
        const activeIndex = getActiveIndex();
        if (activeIndex === -1) return;
        const nextIndex = (activeIndex + 1) % points.length;
        const nextPoint = points[nextIndex];

        mapSvg.querySelectorAll('.dynamic-halo').forEach(el => el.remove());

        const cx = nextPoint.getAttribute('cx');
        const cy = nextPoint.getAttribute('cy');
        const r = nextPoint.getAttribute('r');

        const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        halo.setAttribute('cx', cx);
        halo.setAttribute('cy', cy);
        halo.setAttribute('r', r);
        halo.setAttribute('fill', 'none');
        halo.setAttribute('stroke', '#F8DE51');
        halo.setAttribute('stroke-width', '4');
        halo.setAttribute('opacity', '0.4');
        halo.classList.add('dynamic-halo');

        halo.style.animation = 'none';
        void halo.offsetWidth;
        halo.style.animation = 'halo-pulse 1.6s infinite';

        nextPoint.after(halo);
    }

    function scrollToRecordsDataIfMobile() {
        if (window.innerWidth < 1024) {
            const el = document.getElementById('records-data');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    btnNext.addEventListener("click", () => {
        const current = getActiveIndex();
        const nextIndex = (current + 1) % points.length;
        updateUI(nextIndex);
        updateNextPointHalo();
        scrollToRecordsDataIfMobile();
    });

    btnPrev.addEventListener("click", () => {
        const current = getActiveIndex();
        const prevIndex = current > 0 ? current - 1 : points.length - 1;
        updateUI(prevIndex);
        updateNextPointHalo();
        scrollToRecordsDataIfMobile();
    });

    points.forEach((point, index) => {
        point.addEventListener("click", () => {
            updateUI(index);
            updateNextPointHalo();
            scrollToRecordsDataIfMobile();
        });
    });

    function initRecordsMap() {
        if (getActiveIndex() === -1) {
            points[0].classList.add('map__point--active');
        }
        updateUI(getActiveIndex());
        updateNextPointHalo();
    }

    initRecordsMap();

    initRecordsCharts();
}


// Voitures page
let bodyVoitures = document.querySelector('.body__voitures');

if (bodyVoitures) {
    let sliders = document.querySelectorAll(".voitures");
    let sliderInstances = [];
    let sliderClavierActif = { slider: null, setActive: null, getIndex: null };

    document.addEventListener("keydown", function(e) {
        if (!sliderClavierActif.slider) return;
        if (e.key === "ArrowRight") {
            let idx = sliderClavierActif.getIndex();
            let panels = sliderClavierActif.slider.querySelectorAll(".voitures__panel");
            if (idx < panels.length - 1) sliderClavierActif.setActive(idx + 1);
        } else if (e.key === "ArrowLeft") {
            let idx = sliderClavierActif.getIndex();
            if (idx > 0) sliderClavierActif.setActive(idx - 1);
        }
    });

    function enableSlider(slider) {
        const panels = slider.querySelectorAll(".voitures__panel");
        const dots = slider.querySelectorAll(".voitures__dot");
        let activeIndex = [...panels].findIndex(p => p.classList.contains("voitures__panel--active"));

        function setActive(index) {
            panels.forEach(p => p.classList.remove("voitures__panel--active"));
            dots.forEach(d => d.classList.remove("is-active"));
            panels[index].classList.add("voitures__panel--active");
            dots[index].classList.add("is-active");
            activeIndex = index;
        }

        const clickPanelHandlers = [];
        const clickDotHandlers = [];
        panels.forEach((panel, i) => {
            const handler = () => setActive(i);
            panel.addEventListener("click", handler);
            clickPanelHandlers.push({ el: panel, fn: handler });
        });
        dots.forEach((dot, i) => {
            const handler = (e) => { e.stopPropagation(); setActive(i); };
            dot.addEventListener("click", handler);
            clickDotHandlers.push({ el: dot, fn: handler });
        });

        setActive(activeIndex >= 0 ? activeIndex : 0);

        let startX = 0, isDragging = false;
        function onTouchStart(e) {
            if (e.touches.length !== 1) return;
            startX = e.touches[0].clientX;
            isDragging = true;
        }
        function onTouchMove(e) { if (!isDragging) return; }
        function onTouchEnd(e) {
            if (!isDragging) return;
            let endX = e.changedTouches[0].clientX;
            let deltaX = endX - startX;
            isDragging = false;
            const minSwipe = 50;
            if (Math.abs(deltaX) > minSwipe) {
                if (deltaX < 0 && activeIndex < panels.length - 1) setActive(activeIndex + 1);
                else if (deltaX > 0 && activeIndex > 0) setActive(activeIndex - 1);
            }
        }
        slider.addEventListener('touchstart', onTouchStart, { passive: true });
        slider.addEventListener('touchmove', onTouchMove, { passive: true });
        slider.addEventListener('touchend', onTouchEnd);

        let startDragX = 0, mouseDragging = false;
        function onMouseDown(e) {
            startDragX = e.clientX;
            mouseDragging = true;
            slider.style.userSelect = 'none';
        }
        function onMouseUp(e) {
            if (!mouseDragging) return;
            let endDragX = e.clientX;
            let deltaX = endDragX - startDragX;
            mouseDragging = false;
            slider.style.userSelect = '';
            const minSwipe = 50;
            if (Math.abs(deltaX) > minSwipe) {
                if (deltaX < 0 && activeIndex < panels.length - 1) setActive(activeIndex + 1);
                else if (deltaX > 0 && activeIndex > 0) setActive(activeIndex - 1);
            }
        }
        function onMouseLeave() {
            mouseDragging = false;
            slider.style.userSelect = '';
        }
        slider.addEventListener('mousedown', onMouseDown);
        slider.addEventListener('mouseup', onMouseUp);
        slider.addEventListener('mouseleave', onMouseLeave);

        return () => {
            clickPanelHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
            clickDotHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
            slider.removeEventListener('touchstart', onTouchStart);
            slider.removeEventListener('touchmove', onTouchMove);
            slider.removeEventListener('touchend', onTouchEnd);
            slider.removeEventListener('mousedown', onMouseDown);
            slider.removeEventListener('mouseup', onMouseUp);
            slider.removeEventListener('mouseleave', onMouseLeave);
        };
    }

    sliders.forEach(slider => { sliderInstances.push({ slider, destroy: null }); });

    let observer = null;
    function observeSliders() {
        if (observer) observer.disconnect();

        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
        if (!isDesktop) {
            sliderClavierActif = { slider: null, setActive: null, getIndex: null };
            return;
        }

        observer = new IntersectionObserver((entries) => {
            let visibleSliders = entries.filter(entry => entry.intersectionRatio >= 0.5);
            let entryBest = visibleSliders.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (entryBest) {
                const slider = entryBest.target;
                const panels = slider.querySelectorAll(".voitures__panel");
                const dots = slider.querySelectorAll(".voitures__dot");
                sliderClavierActif = {
                    slider: slider,
                    setActive: function(index) {
                        panels.forEach(p => p.classList.remove("voitures__panel--active"));
                        dots.forEach(d => d.classList.remove("is-active"));
                        panels[index].classList.add("voitures__panel--active");
                        dots[index].classList.add("is-active");
                    },
                    getIndex: () => [...slider.querySelectorAll(".voitures__panel")].findIndex(p => p.classList.contains("voitures__panel--active"))
                };
            } else {
                sliderClavierActif = { slider: null, setActive: null, getIndex: null };
            }
        }, {
            threshold: Array.from({ length: 21 }, (_, i) => i / 20)
        });

        sliders.forEach(slider => observer.observe(slider));
    }

    function handleResize() {
        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
        sliderInstances.forEach(instance => {
            if (!isDesktop && instance.destroy) {
                const panels = instance.slider.querySelectorAll(".voitures__panel");
                const dots = instance.slider.querySelectorAll(".voitures__dot");
                const activeIndex = [...panels].findIndex(p => p.classList.contains("voitures__panel--active"));
                if (activeIndex !== 0) {
                    panels.forEach(p => p.classList.remove("voitures__panel--active"));
                    dots.forEach(d => d.classList.remove("is-active"));
                    panels[0].classList.add("voitures__panel--active");
                    dots[0].classList.add("is-active");
                }
                instance.destroy();
                instance.destroy = null;
            }
            if (isDesktop && !instance.destroy) {
                instance.destroy = enableSlider(instance.slider);
            }
        });
        observeSliders();
    }

    window.addEventListener('resize', handleResize);
    handleResize();
}
