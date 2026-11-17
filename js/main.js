// Content is fully visible without this file. It only adds the current year
// and a gentle fade-in for sections as they scroll into view.
(function () {
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rise').forEach(function (el) { io.observe(el); });
})();
