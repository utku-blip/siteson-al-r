const spotlightEl = document.createElement("div");
spotlightEl.className = "spotlight";
document.body.appendChild(spotlightEl);

window.addEventListener("pointermove", (e) => {
  const x = `${e.clientX}px`;
  const y = `${e.clientY}px`;
  document.documentElement.style.setProperty("--mx", x);
  document.documentElement.style.setProperty("--my", y);
  spotlightEl.style.setProperty("--mx", x);
  spotlightEl.style.setProperty("--my", y);
});
