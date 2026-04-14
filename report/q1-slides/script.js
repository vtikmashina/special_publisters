const slides = Array.from(document.querySelectorAll(".slide"));
const currentSlideNode = document.getElementById("current-slide");
const totalSlidesNode = document.getElementById("total-slides");
const navButtons = document.querySelectorAll("[data-nav]");

let activeIndex = 0;

function formatIndex(index) {
  return String(index + 1).padStart(2, "0");
}

function setActiveSlide(index) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeIndex);
  });
  currentSlideNode.textContent = formatIndex(activeIndex);
}

function goToSlide(index) {
  const target = slides[Math.max(0, Math.min(index, slides.length - 1))];
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    const index = slides.indexOf(visible.target);
    if (index !== -1) setActiveSlide(index);
  },
  {
    threshold: [0.4, 0.6, 0.8],
  }
);

slides.forEach((slide) => observer.observe(slide));
totalSlidesNode.textContent = String(slides.length).padStart(2, "0");
setActiveSlide(0);

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.nav === "next" ? 1 : -1;
    goToSlide(activeIndex + direction);
  });
});

window.addEventListener("keydown", (event) => {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    goToSlide(activeIndex + 1);
  }

  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    goToSlide(activeIndex - 1);
  }
});
