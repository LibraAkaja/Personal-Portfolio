import { isThere } from "./dynamic.js";

const hamburger = document.querySelector('.hamburger');

const logoSection = document.querySelector(".nav-logo-section");

logoSection.addEventListener("click", ()=> {
    window.location.href = "/index.html";
},{once:true});

export function checkDisplayWidth(){
    const length = window.innerWidth;
    return length;
}

export const hOneAccPage = ".hOne";

export const hStatus = isThere(hOneAccPage);

// Navbar animation 
const nav = document.querySelector("nav");
window.addEventListener("scroll",()=>{
    nav.classList.toggle("scrolled",window.scrollY > 5);
});

// Theme togglation
export function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('menu-open');
    });
}
setupNavbar();