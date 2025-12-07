import "./style.css";
import "./utils/spotlight.js";
import "./utils/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("visible");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.classList.add("visible");
    });
  },{threshold:0.18});
  sections.forEach(s=>observer.observe(s));

  // mockup tilt
  const device = document.querySelector(".hero-mockup .device");
  if(device){
    const wrap = device.parentElement;
    wrap.addEventListener("pointermove",(e)=>{
      const rX = (e.clientY - window.innerHeight/2)/40;
      const rY = (e.clientX - window.innerWidth/2)/40;
      device.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    wrap.addEventListener("pointerleave",()=>{
      device.style.transform = "perspective(1000px) rotateX(6deg) rotateY(-6deg)";
    });
  }
});
