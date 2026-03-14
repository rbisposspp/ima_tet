(() => {
  "use strict";

  const artboard = document.querySelector(".artboard");
  const toggleBtn = document.querySelector("#musicToggle");
  const statusEl = document.querySelector("#musicStatus");

  if (!artboard || !toggleBtn || !statusEl) {
    console.error("Scene controls failed to initialize: missing required DOM elements.");
    return;
  }

  let isPlaying = true;

  const updateUi = () => {
    artboard.classList.toggle("music-paused", !isPlaying);
    toggleBtn.setAttribute("aria-pressed", String(isPlaying));
    toggleBtn.textContent = isPlaying ? "Pause music animation" : "Play music animation";
    statusEl.textContent = isPlaying ? "Music is playing" : "Music is paused";
  };

  toggleBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    updateUi();
  });

  updateUi();
})();
