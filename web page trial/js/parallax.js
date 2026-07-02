const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{

    const offset = window.pageYOffset;

    heroBg.style.transform = `translateY(${offset*0.35}px) scale(1.1)`;

});
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*20;

    const y=(e.clientY/window.innerHeight-.5)*20;

    heroBg.style.transform=
    `translate(${x}px,${y}px)
     scale(1.12)
     translateY(${window.pageYOffset*0.35}px)`;

});