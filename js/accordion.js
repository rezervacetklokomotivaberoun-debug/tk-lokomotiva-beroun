const accordion=document.querySelectorAll(".accordion-header");

accordion.forEach(item=>{

item.addEventListener("click",()=>{

const parent=item.parentElement;

parent.classList.toggle("active");

const content=item.nextElementSibling;

if(parent.classList.contains("active")){

content.style.maxHeight=content.scrollHeight+"px";

}

else{

content.style.maxHeight=null;

}

});

});
