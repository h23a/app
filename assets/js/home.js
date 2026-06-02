function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function splitName() {
  const name = document.getElementById("intro-title");

  if (!name) {
    return;
  }

  const bear = name.querySelector(".bear");
  const fragment = document.createDocumentFragment();

  "Hiskia".split("").forEach((character, index) => {
    const span = document.createElement("span");
    span.className = "ch";
    span.textContent = character;
    span.style.animationDelay = `${0.15 + index * 0.07}s, ${1.2 + index * 0.18}s`;
    fragment.appendChild(span);
  });

  let node = name.firstChild;
  while (node && node !== bear) {
    const next = node.nextSibling;
    name.removeChild(node);
    node = next;
  }

  name.insertBefore(fragment, bear);
}

function duplicateTicker() {
  const track = document.getElementById("track");

  if (track) {
    track.innerHTML += track.innerHTML;
  }
}

function addPetals() {
  if (prefersReducedMotion()) {
    return;
  }

  const motifs = document.querySelector(".motifs");

  if (!motifs) {
    return;
  }

  for (let i = 0; i < 12; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${6 + Math.random() * 88}%`;
    petal.style.animationDuration = `${12 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 14}s`;
    petal.style.transform = `scale(${0.7 + Math.random() * 0.8})`;
    motifs.appendChild(petal);
  }
}

function addInkTrail() {
  if (prefersReducedMotion() || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  let lastDot = 0;

  window.addEventListener("pointermove", (event) => {
    const now = performance.now();

    if (now - lastDot < 110) {
      return;
    }

    lastDot = now;
    const dot = document.createElement("span");
    dot.className = "trail-dot";
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    document.body.appendChild(dot);

    window.setTimeout(() => {
      dot.remove();
    }, 900);
  });
}

function initStyledHome() {
  if (document.documentElement.dataset.styledVersion !== "true") {
    return;
  }

  splitName();
  duplicateTicker();
  addPetals();
  addInkTrail();
}

initStyledHome();
