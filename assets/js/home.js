function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function duplicateTicker() {
  const track = document.getElementById("track");
  const group = document.getElementById("tgroup");

  if (!track || !group) {
    return;
  }

  const clone = group.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("aria-hidden", "true");
  track.appendChild(clone);
}

function flickerName() {
  const name = document.getElementById("intro-title");

  if (prefersReducedMotion() || !name) {
    return;
  }

  name.style.opacity = "0";
  name.style.transition = "opacity 0.5s ease";

  [0, 60, 90, 160, 200, 320].forEach((time, index) => {
    window.setTimeout(() => {
      name.style.opacity = index % 2 ? "0.35" : "1";
    }, time);
  });

  window.setTimeout(() => {
    name.style.opacity = "1";
  }, 380);
}

function blinkEyes() {
  const eyes = document.getElementById("bear-eyes");

  if (prefersReducedMotion() || !eyes) {
    return;
  }

  const open = "ʕ•ᴥ•ʔ";
  const shut = "ʕ-ᴥ-ʔ";

  function blink() {
    eyes.textContent = shut;
    window.setTimeout(() => {
      eyes.textContent = open;
    }, 130);

    if (Math.random() < 0.3) {
      window.setTimeout(() => {
        eyes.textContent = shut;
      }, 300);
      window.setTimeout(() => {
        eyes.textContent = open;
      }, 420);
    }

    window.setTimeout(blink, 2200 + Math.random() * 3200);
  }

  window.setTimeout(blink, 1600);
}

duplicateTicker();
flickerName();
blinkEyes();
