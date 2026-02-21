/* Fade animation */

function createObserver({rootMargin, addClass, removeClass=""}){
    return new IntersectionObserver(
        (sections) => {
            sections.forEach(section => {
                if (section.isIntersecting){
                    if(removeClass) section.target.classList.remove(removeClass);
                    section.target.classList.add(addClass);
                } else{
                    section.target.classList.remove(addClass);
                    if(removeClass) section.target.classList.add(removeClass);
                }
            });
        },
        {
            threshold: 0,
            rootMargin
        }
    );
}

const sectionObserver = createObserver({
    rootMargin: "-301px 0px -100px 0px",
    addClass: "show"
});

const cubeObserver = createObserver({
    rootMargin: "-301px 0px 0px 0px",
    addClass: "show",
    removeClass: "hide"
});

const instituteObserver = createObserver({
    rootMargin: "-400px 0px -100px 0px",
    addClass: "show",
    removeClass: "hide"
})

const socialObserver = createObserver({
    rootMargin: "-242px 0px -80px 0px",
    addClass: "show",
    removeClass: "hide"
});

const projectObserver = createObserver({
    rootMargin: "-400px 0px -100px 0px",
    addClass: "show",
    removeClass: "hide"
});

/* Activate animation */

if(document.querySelector("#cube")){
    document.querySelectorAll(".detailCategory").forEach((el)=> {sectionObserver.observe(el);});
    document.querySelectorAll(".cube").forEach((el)=>{cubeObserver.observe(el);});
}
if(document.querySelector("#LinkedIn")){
    document.querySelectorAll(".socials").forEach((el)=>{socialObserver.observe(el)});
}
if(document.querySelector("#lsa")){
    document.querySelectorAll(".institute").forEach((el)=>{instituteObserver.observe(el)});
}
if(document.querySelector("#qrrg")){
    document.querySelectorAll(".project").forEach((el)=>{projectObserver.observe(el)});
}


import { hOneAccPage, hStatus } from "./navBar.js";
if(hStatus){
    window.addEventListener("scroll",()=>{
        document.querySelector(hOneAccPage).classList.toggle("scrolled",window.scrollY > 40);
    });
}