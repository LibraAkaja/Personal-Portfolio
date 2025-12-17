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
            threshold: 0.1,
            rootMargin
        }
    );
}

const sectionObserver = createObserver({
    rootMargin: "-150px 0px -150px 0px",
    addClass: "show"
});

const cubeObserver = createObserver({
    rootMargin: "-125px 0px 0px -75px",
    addClass: "show",
    removeClass: "hide"
});

document.querySelectorAll(".detailCategory").forEach((el)=> {
    sectionObserver.observe(el);
});

document.querySelectorAll(".cube").forEach((el)=>{
    cubeObserver.observe(el);
});