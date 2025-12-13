import { changeCSS, changeCSSall } from "./dynamic.js";

// const navBar = document.querySelector("nav");
// const itemSection = document.querySelector("nav section");
const hamburgerMenu = document.querySelector("nav img");
// const cube = document.querySelector(".cube");

function checkDisplayWidth(){
    const length = window.innerWidth;
    return length;
}

let clicked = false;
hamburgerMenu.addEventListener("click", ()=>{
    const handleClick = clicked? ()=>{
        //To close the menu
        changeCSS("nav", "padding-top", "0px");
        changeCSS("nav section", "display", "none");
        changeCSS("#cube","transform","translateY(0px)");
        clicked = false;
    } : ()=> {
        //To open the menu
        const displayWidth = checkDisplayWidth();
        const handleAnimationAccWidth = (displayWidth < 420)
                                        ? ()=> {changeCSS("#cube","transform","translateY(332px)");}
                                        : (displayWidth > 419 && displayWidth < 768)
                                          ? ()=> {changeCSS("#cube","transform","translateY(299px)");}
                                          : ()=> {};
        handleAnimationAccWidth();
        setTimeout(()=>{        
            changeCSS("nav","padding-top", "25px");
            changeCSS("nav section", "display", "flex");
        },500);
        clicked = true;
    };
    handleClick();
});

/* Logic to keep checking the size of the screen */