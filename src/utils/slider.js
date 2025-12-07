(function(){
  const slider = document.getElementById("test-slider");
  const dotsContainer = document.getElementById("test-dots");
  if(!slider || !dotsContainer) return;
  const items = Array.from(slider.children);
  let idx = 0;

  function renderDots(){
    dotsContainer.innerHTML = "";
    items.forEach((_,i)=>{
      const d=document.createElement("div");
      d.className="dot"+(i===0?" active":"");
      d.addEventListener("click",()=>{idx=i;update();resetAuto();});
      dotsContainer.appendChild(d);
    });
  }

  function update(){
    if(!items.length) return;
    const w = items[0].offsetWidth + 18;
    slider.style.transform = `translateX(-${idx * w}px)`;
    Array.from(dotsContainer.children).forEach((dot,i)=>dot.classList.toggle("active", i===idx));
  }

  function next(){ idx = (idx+1)%items.length; update(); }

  let auto = setInterval(next, 4500);
  function resetAuto(){ clearInterval(auto); auto=setInterval(next,4500); }

  renderDots();
  window.addEventListener("resize", update);
})();
