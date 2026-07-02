const cursor = document.querySelector(".cursor");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

});

function animate(){

    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animate);

}

animate();

document.querySelectorAll("a, button").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        outline.classList.add("cursor-hover");

    });

    item.addEventListener("mouseleave",()=>{

        outline.classList.remove("cursor-hover");

    });

});