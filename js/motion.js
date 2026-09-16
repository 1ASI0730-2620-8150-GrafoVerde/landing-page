(() => {
  if (typeof gsap === "undefined") return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    return true;
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || link.target === "_blank") return;
    const id = link.getAttribute("href");
    if (!id || id === "#" || !document.querySelector(id)) return;

    event.preventDefault();
    scrollToSection(id);

    const next = `${location.pathname}${location.search}${id}`;
    if (`${location.pathname}${location.search}${location.hash}` !== next) {
      history.pushState(null, "", next);
    }
  });

  window.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });

  document.querySelectorAll(".hero__cta, .site-header__cta, .pathway__cta, .plan__cta, .closing__cta").forEach((el) => {
    const icon = el.querySelector("svg");
    if (!icon) return;
    el.addEventListener("mouseenter", () => gsap.to(icon, { x: 4, duration: 0.14, ease }));
    el.addEventListener("mouseleave", () => gsap.to(icon, { x: 0, duration: 0.14, ease }));
    el.addEventListener("focus", () => gsap.to(icon, { x: 4, duration: 0.14, ease }));
    el.addEventListener("blur", () => gsap.to(icon, { x: 0, duration: 0.14, ease }));
  });

  if (reduce) return;

  const intro = gsap.timeline({ defaults: { ease } });
  intro.from(".hero__copy > *", {
    y: 18,
    opacity: 0,
    filter: "blur(6px)",
    stagger: 0.08,
    duration: 0.7,
  });
  intro.from(".hero__actions", { y: 10, opacity: 0, duration: 0.4 }, "-=0.4");
  intro.from(
    ".hero__preview",
    { clipPath: "inset(0 0 100% 0)", duration: 0.85 },
    "-=0.35",
  );

  if (!window.ScrollTrigger) return;

  gsap.from(".pathway", {
    scrollTrigger: { trigger: ".segments", start: "top 78%", once: true },
    y: 24,
    opacity: 0,
    duration: 0.5,
    stagger: 0.09,
    ease,
    immediateRender: false,
  });

  gsap.from(".workflow__step", {
    scrollTrigger: { trigger: ".workflow", start: "top 75%", once: true },
    x: -16,
    opacity: 0,
    duration: 0.45,
    stagger: 0.08,
    ease,
    immediateRender: false,
  });

  gsap.from(".plan", {
    scrollTrigger: { trigger: ".plans", start: "top 75%", once: true },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease,
    immediateRender: false,
  });

  gsap.from(".member", {
    scrollTrigger: { trigger: ".team__grid", start: "top 82%", once: true },
    y: 16,
    opacity: 0,
    duration: 0.4,
    stagger: { each: 0.07, from: "start" },
    ease,
    immediateRender: false,
  });

  gsap.from(".closing__panel", {
    scrollTrigger: { trigger: ".closing", start: "top 80%", once: true },
    clipPath: "inset(0 40% 0 0)",
    opacity: 0.85,
    duration: 0.7,
    ease,
    immediateRender: false,
  });
})();
