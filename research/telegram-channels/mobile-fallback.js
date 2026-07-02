(function () {
  function readBarWidth(row) {
    var spans = row.querySelectorAll("span");
    var text = spans.length ? (spans[spans.length - 1].textContent || "") : "";
    var percent = text.match(/(\d+(?:[.,]\d+)?)\s*%/);

    if (percent) {
      return Number(percent[1].replace(",", "."));
    }

    var score = text.match(/(\d+(?:[.,]\d+)?)/);
    if (score) {
      return Number(score[1].replace(",", ".")) / 5 * 100;
    }

    return null;
  }

  function applyFallback() {
    document.querySelectorAll(".survey-card").forEach(function (card) {
      card.classList.add("revealed");
      card.style.transitionDelay = "0ms";
    });

    document.querySelectorAll(".bar-row").forEach(function (row) {
      var fill = row.querySelector(".bar-fill");
      var width = readBarWidth(row);

      if (!fill || width === null || !Number.isFinite(width)) {
        return;
      }

      fill.style.width = Math.max(0, Math.min(100, width)) + "%";
    });
  }

  function scheduleFallback() {
    var runs = 0;
    var timer = window.setInterval(function () {
      applyFallback();
      runs += 1;

      if (runs >= 80) {
        window.clearInterval(timer);
      }
    }, 250);
  }

  applyFallback();
  scheduleFallback();
  window.addEventListener("DOMContentLoaded", applyFallback, { once: true });
  window.addEventListener("load", applyFallback, { once: true });
  window.addEventListener("scroll", applyFallback, { passive: true });
})();
