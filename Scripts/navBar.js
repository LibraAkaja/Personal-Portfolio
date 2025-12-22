import { changeCSS } from "./dynamic.js";

const hamburgerMenu = document.querySelector("nav img");

let clicked = false;

export function checkDisplayWidth(){
    const length = window.innerWidth;
    return length;
}

function closeMenu(){
    changeCSS("nav", "padding-top", "0px");
    changeCSS("nav section", "display", "none");
    changeCSS("main","transform","translateY(0px)")
    clicked = false;
    return;
}

hamburgerMenu.addEventListener("click", ()=>{
    const handleClick = clicked? closeMenu() : ()=> {
        const displayWidth = checkDisplayWidth();
        const handleCubeAnimationAccWidth = 
                                    (displayWidth < 375)
                                    ? ()=>  {changeCSS("main","transform","translateY(263px)");}
                                    :   (displayWidth < 425)
                                        ?   ()=>    {changeCSS("main","transform","translateY(250px)");}
                                        :   (displayWidth > 424 && displayWidth < 648)
                                            ?   ()=>    {changeCSS("main","transform","translateY(251px)");}
                                            :   (displayWidth > 647 && displayWidth < 768)
                                                ?   ()=>    {changeCSS("main","transform","translateY(182px)");}
                                                : ()=> {};
        handleCubeAnimationAccWidth();
        setTimeout(()=>{        
            changeCSS("nav","padding-top", "25px");
            changeCSS("nav section", "display", "flex");
        },500);
        clicked = true;
        window.addEventListener("scroll",()=>{
            const scrollY = window.scrollY || window.pageYOffset;
            const handleScroll = (scrollY > 0)
                                ? closeMenu
                                : {}; 
            handleScroll();
        },{once:true});
    };
    handleClick();
});

/* Navbar animation */
const nav = document.querySelector("nav");
window.addEventListener("scroll",()=>{
    nav.classList.toggle("scrolled",window.scrollY > 5);
});