/* script.js
 - small helpers: scroll reveal (adds in-view to .slide-up), animated counters
 - Edit: change thresholds or animation behavior here
*/

(function(){
  // Respect reduced motion preference
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    // IntersectionObserver to add .in-view when element scrolls into view
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          // optionally unobserve after reveal
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});

    document.querySelectorAll('.slide-up').forEach(el => io.observe(el));
  } else {
    // If reduced motion, add .in-view immediately
    document.querySelectorAll('.slide-up').forEach(el => el.classList.add('in-view'));
  }

  // Animated number counters (trigger when visible)
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (!target) { el.textContent = '0'; return; }
    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(16, Math.floor(duration / target));
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = current.toLocaleString();
      }
    }, 16);
  }

  // Observe counters
  const counters = document.querySelectorAll('.count');
  if (!reduceMotion && counters.length) {
    const coi = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          coi.unobserve(e.target);
        }
      });
    }, {threshold: 0.4});
    counters.forEach(c => coi.observe(c));
  } else {
    counters.forEach(c => c.textContent = (parseInt(c.dataset.target,10)||0).toLocaleString());
  }
})();
