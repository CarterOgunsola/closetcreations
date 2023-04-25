gsap.registerPlugin(ScrollTrigger);

//const fx11Titles = [
//  ...document.querySelectorAll(".content__title[data-splitting][data-effect11]")
//];

const fx16Titles = [
  ...document.querySelectorAll(".content__title[data-splitting][data-effect16]")
];

// GSAP Scroll Triggers

//fx11Titles.forEach((title) => {
//  const chars = title.querySelectorAll(".char");
  //wrapElements(chars, "span", "char-wrap");

  //gsap.fromTo(
   // chars,
   // {
     // "will-change": "transform",
      //transformOrigin: "0% 50%",
     // xPercent: 105
   // },
    //{
     // duration: 0.4,
   //   ease: "expo",
   //   xPercent: 0,
   //   stagger: 0.032,
   //   scrollTrigger: {
   //     trigger: title,
   //     start: "top bottom-=50", // adjust the start value to make the animation start quicker
   //     end: "center+=150% center",
   //     scrub: true,
   //     markers: false // for debugging
  //    }
 //   }
//  );
// });

fx16Titles.forEach((title) => {
  gsap.fromTo(
    title,
    {
      transformOrigin: "0% 50%",
      rotate: 0
    },
    {
      ease: "none",
      rotate: 0,
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    }
  );

  gsap.fromTo(
    title.querySelectorAll(".word"),
    {
      "will-change": "opacity",
      opacity: 0.1
    },
    {
      ease: "none",
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: title,
        start: "top bottom-=20%",
        end: "center+=120% center",
        scrub: true
      }
    }
  );
});
