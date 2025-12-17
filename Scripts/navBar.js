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
    changeCSS("#cube","transform","translateY(0px)");
    changeCSS("#main","transform","translateY(0px)")
    clicked = false;
    return;
}

hamburgerMenu.addEventListener("click", ()=>{
    const handleClick = clicked? closeMenu() : ()=> {
        const displayWidth = checkDisplayWidth();
        const handleCubeAnimationAccWidth = 
                                    (displayWidth < 321)
                                    ? ()=>  {changeCSS("#cube", "transform", "translateY(364px)");
                                             changeCSS("#main","transform","translateY(364px)");
                                            }
                                    :   (displayWidth < 376)
                                        ? ()=>  {changeCSS("#cube", "transform","translateY(350px)");
                                                 changeCSS("#main","transform","translateY(350px)");
                                                }
                                        :   (displayWidth < 420)
                                            ?   ()=>    {changeCSS("#cube","transform","translateY(328px)");
                                                         changeCSS("#main","transform","translateY(328px)");
                                                        }
                                            :   (displayWidth > 419 && displayWidth < 768)
                                                ?   ()=>    {changeCSS("#cube","transform","translateY(260px)");
                                                             changeCSS("#main","transform","translateY(260px)");
                                                            }
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