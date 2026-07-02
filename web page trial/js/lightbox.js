const images=document.querySelectorAll(".gallery-item img");
const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightbox-image");

const closeBtn=document.querySelector(".close");
const nextBtn=document.querySelector(".next");
const prevBtn=document.querySelector(".prev");

let current=0;

function showImage(index){

lightboxImage.src=images[index].src;

}

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

showImage(current);

lightbox.classList.add("active");

});

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

nextBtn.addEventListener("click",()=>{

current++;

if(current>=images.length){

current=0;

}

showImage(current);

});

prevBtn.addEventListener("click",()=>{

current--;

if(current<0){

current=images.length-1;

}

showImage(current);

});

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});