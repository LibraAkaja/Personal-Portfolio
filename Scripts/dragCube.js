const cube = document.querySelector(".cubeContainer");

/* Animation for dragging cube with finger or mouse pointer */

let isDragging = false;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;
let rotateX = 0, rotateY = 0, rotateZ = 0;
let startRotateX = 0, startRotateY = 0;

cube.addEventListener("pointerdown", (e) => {
    isDragging = true;
    cube.style.transition = "none";
    startX = e.clientX;
    startY = e.clientY;
    startRotateX = rotateX;
    startRotateY = rotateY;
    cube.setPointerCapture(e.pointerId);
    cube.style.cursor = "grabbing";
});

cube.addEventListener("pointermove", (e) => {
    if(!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    rotateY = startRotateY + dx * 0.4;
    rotateX = startRotateX - dy * 0.4;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

cube.addEventListener("pointerup", endDrag);

cube.addEventListener("pointercancel", endDrag);

function endDrag(){
    isDragging = false;
    cube.style.cursor = "grab";
    const snapAngle = 45;
    rotateY = Math.round(rotateY / snapAngle) * snapAngle;
    rotateZ = Math.round(rotateZ / snapAngle) * snapAngle;
    cube.style.transition = "transform 1s ease";
    setTimeout(()=>{cube.style.transform = "rotateX(0deg) rotateY(45deg) rotateZ(45deg)"},4000);
}