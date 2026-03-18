import { isThere } from "./dynamic.js";

export const hOneAccPage = ".hOne";

export const hStatus = isThere(hOneAccPage);

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const logoSection = document.querySelector(".nav-logo-section");

let isOpen = false;

logoSection.addEventListener("click", () => {
    window.location.href = "/index.html";
}, { once: true });

export function checkDisplayWidth(){
    return window.innerWidth;
}

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 5);
});

// Main navbar setup
export function setupNavbar() {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navbar.classList.toggle('menu-open');
        isOpen = !isOpen;
        if (isOpen) {
            window.addEventListener("scroll", handleScrollClose, { once: true });
        }
    });

    document.addEventListener("click", (e) => {
        if (isOpen && !navbar.contains(e.target)) {
            closeMenu();
        }
    });
}

function closeMenu() {
    navbar.classList.remove("menu-open");
    isOpen = false;
}

function handleScrollClose() {
    closeMenu();
}

setupNavbar();

function highlightActiveNav() {
    const currentPath = window.location.pathname.split("/").pop(); 
    const navLinks = document.querySelectorAll(".navItem");
    navLinks.forEach(link => {
        let href = link.getAttribute("href");
        if (!href) return;
        if (href.startsWith("http") || href.startsWith("#")) return;
        const linkPath = href.split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add("navItem--active");
        }
        if (
            (currentPath === "" || currentPath === "index.html") &&
            (href.includes("index.html") || href === "#")
        ) {
            link.classList.add("navItem--active");
        }
    });
}

highlightActiveNav();