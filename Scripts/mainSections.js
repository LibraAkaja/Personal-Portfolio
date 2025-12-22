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

document.querySelectorAll(".detailCategory").forEach((el)=> {
    sectionObserver.observe(el);
});

document.querySelectorAll(".cube").forEach((el)=>{
    cubeObserver.observe(el);
});