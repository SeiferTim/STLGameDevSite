(() => {
  // Super-light parallax controller for the home mockup.
  // Elements:
  //   .parallax-item[data-speed="0.12"]
  // Position:
  //   top/left controlled via CSS vars (--x, --y). We only translateY.

  const items = Array.from(document.querySelectorAll('.parallax-item[data-speed]'));
  if (!items.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  let ticking = false;

  function update() {
    ticking = false;

    const y = window.scrollY || window.pageYOffset || 0;

    for (const el of items) {
      const speed = Number(el.dataset.speed || '0');
      // Translate *slower* than scroll for that floating sensation.
      const offset = -y * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
