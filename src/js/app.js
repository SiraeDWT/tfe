"use strict";

import '../css/app.css';
import '../scss/app.scss';


import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// import { navbar } from './components/menu.js';

// navbar();

const index = document.querySelector('.home');
const tl = gsap.timeline();
const mm = gsap.matchMedia();

if(index){
    mm.add("(max-width: 1439px)", () => {});
    
    mm.add("(min-width: 1440px)", () => {
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
  
  
      tl.to("#lh-img-01", {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)"
      })
      .to("#lh-img-02", {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)"
      }, "+=0.2");
  
  
      const lines = document.querySelectorAll('.svg-line');
  
      lines.forEach((line) => {
          tl.to(line, {
              x: 0,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(1.7)"
          });
      });
    });
}
