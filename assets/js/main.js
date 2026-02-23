// Mobile menu toggle
(function () {
  const btn = document.querySelector("[data-menu-btn]");
  const panel = document.querySelector("[data-mobile-panel]");
  if (btn && panel) {
    btn.addEventListener("click", () => {
      const open = panel.style.display === "block";
      panel.style.display = open ? "none" : "block";
      btn.setAttribute("aria-expanded", String(!open));
    });
  }

  // Reveal on scroll
  const els = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));

  // Active nav (simple)
  const path = location.pathname;
  const links = Array.from(document.querySelectorAll('a[data-nav="1"]'));
  links.forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (href && path.endsWith(href.replace(/\/+$/, ""))) {
      a.classList.add("active");
    }
  });
})();
