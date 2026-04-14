const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const pigeonPond = document.querySelector("[data-pigeon-pond]");
const pigeons = Array.from(document.querySelectorAll("[data-pigeon]"));

if (pigeonPond && pigeons.length) {
  const placed = [];

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resolveBounds() {
    return {
      width: pigeonPond.clientWidth,
      height: pigeonPond.clientHeight,
    };
  }

  function movePigeon(pigeon, force = false) {
    const bounds = resolveBounds();
    const size = pigeon.offsetWidth || 112;
    const maxX = Math.max(0, bounds.width - size);
    const maxY = Math.max(0, bounds.height - size);

    let tries = 0;
    let nextX = 0;
    let nextY = 0;

    do {
      nextX = randomBetween(0, maxX);
      nextY = randomBetween(0, maxY);
      tries += 1;
    } while (
      tries < 25 &&
      placed.some((entry) => {
        if (entry.el === pigeon) return false;
        const dx = entry.x - nextX;
        const dy = entry.y - nextY;
        return Math.hypot(dx, dy) < size * 0.9;
      })
    );

    const existing = placed.find((entry) => entry.el === pigeon);
    if (existing) {
      existing.x = nextX;
      existing.y = nextY;
    } else {
      placed.push({ el: pigeon, x: nextX, y: nextY });
    }

    pigeon.style.left = `${nextX}px`;
    pigeon.style.top = `${nextY}px`;

    if (force) {
      pigeon.style.transform = `translate3d(0, 0, 0) rotate(${randomBetween(-5, 5)}deg)`;
    }
  }

  function placeAllPigeons() {
    placed.length = 0;
    pigeons.forEach((pigeon, index) => {
      pigeon.style.zIndex = String(index + 1);
      movePigeon(pigeon, true);
    });
  }

  function startDrift() {
    pigeons.forEach((pigeon) => {
      const duration = randomBetween(5.5, 9.5);
      const dx = randomBetween(-10, 10);
      const dy = randomBetween(-8, 8);
      pigeon.animate(
        [
          { transform: `translate3d(0, 0, 0) rotate(${randomBetween(-4, 4)}deg)` },
          { transform: `translate3d(${dx}px, ${dy}px, 0) rotate(${randomBetween(-7, 7)}deg)` },
          { transform: `translate3d(0, 0, 0) rotate(${randomBetween(-4, 4)}deg)` },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        },
      );
    });
  }

  pigeons.forEach((pigeon) => {
    pigeon.addEventListener("mouseenter", () => movePigeon(pigeon));
    pigeon.addEventListener("pointerdown", () => movePigeon(pigeon));
  });

  window.addEventListener("resize", placeAllPigeons);

  placeAllPigeons();
  startDrift();
}
