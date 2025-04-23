"use strict";

import '../css/app.css';
import '../scss/app.scss';


import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const index = document.querySelector('.home');
const transition = document.querySelector('#transition');

const tl = gsap.timeline();
const mm = gsap.matchMedia();

// Mobile
mm.add("(max-width: 1439px)", () => {});

// Desktop
mm.add("(min-width: 1440px)", () => {
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

    if(index){
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
        });
    
    
        const lines = document.querySelectorAll('.svg-line');
    
        lines.forEach((line) => {
            tl.to(line, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        });

        


        // const targetText = "« Le moment où vous abandonnez, c'est le moment où vous laissez quelqu'un d'autre gagner. »";
        // const quoteEl = document.querySelector("#quote");

        // gsap.set(quoteEl, { opacity: 0 });

        // ScrollTrigger.create({
        //     trigger: "#citation",
        //     start: "top 90%",
        //     once: true,
        //     onEnter: () => {
        //         gsap.to(quoteEl, {
        //             opacity: 1,
        //             duration: 0.3,
        //             onComplete: () => typeText(targetText)
        //         });
        //     }
        // });

        // function typeText(text) {
        //     quoteEl.textContent = "";
        //     let index = 0;
        //     const interval = setInterval(() => {
        //         quoteEl.textContent += text.charAt(index);
        //         index++;
        //         if (index >= text.length) clearInterval(interval);
        //     }, 30);
        // }

        const targetText = "« Le moment où vous abandonnez, c'est le moment où vous laissez quelqu'un d'autre gagner. »";
        const quoteEl = document.getElementById("quote");
        const lhEl = document.querySelector(".citation__lh");

        gsap.set(quoteEl, { opacity: 0 });
        gsap.set(lhEl, { opacity: 0 });

        ScrollTrigger.create({
            trigger: "#citation",
            start: "top 40%",
            once: true,
            onEnter: () => {
                gsap.to(quoteEl, {
                    opacity: 1,
                    duration: 0.3,
                    onComplete: () => typeText(targetText)
                });
            }
        });

        function typeText(text) {
            quoteEl.textContent = "";
            let index = 0;
            const interval = setInterval(() => {
                quoteEl.textContent += text.charAt(index);
                index++;
                if (index >= text.length) {
                    clearInterval(interval);
                    gsap.to(lhEl, {
                        opacity: 1,
                        duration: 1
                    });
                }
            }, 50);
        }



    }
});
