const tl = gsap.timeline();

tl.from("#idx_logo", { y: 350, duration: 1 })
  .from("#idx_lock", { autoAlpha: 0, y: 350, duration: 1 }, "-=0.9")
  .from("#idx_content", { autoAlpha: 0, y: 400, duration: 1 }, "-=0.8");
