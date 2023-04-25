// Set all links to 100% opacity initially
gsap.set("[data-nav-menu-link]", { opacity: 1 });

// On hover of a link, reduce the opacity of other links and animate the hovered link to 100%
$("[data-nav-menu-link]").hover(function() {
  gsap.to("[data-nav-menu-link]:not(:hover)", { opacity: 0.4, ease: "quad.out", duration: 0.7 });
  gsap.to(this, { opacity: 1, ease: "quad.out", duration: 0.7 });
}, function() {
  gsap.to("[data-nav-menu-link]", { opacity: 1, ease: "quad.out", duration: 0.7 });
});