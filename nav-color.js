function setInitialOpacity() {
    const navBgColor = document.querySelector('.nav-bg-color');
    const navBgColorSec = document.querySelector('.nav-bg-color.sec');
  
    if (navBgColor) {
      navBgColor.style.opacity = 0;
    }
  
    if (navBgColorSec) {
      navBgColorSec.style.opacity = 0;
    }
  }
  
  function updateNavOpacity() {
    const pageWrapper = document.querySelector('.page-wrapper');
    const navBgColor = document.querySelector('.nav-bg-color');
    const navBgColorSec = document.querySelector('.nav-bg-color.sec');
    const mainNavigation = document.querySelector('.main-navigation');
  
    const scrollPosition = window.scrollY || window.pageYOffset;
    const targetOpacity = scrollPosition >= window.innerHeight ? 1 : 0;
    const targetPadding = scrollPosition >= window.innerHeight ? '1rem' : '1.6rem';
  
    if (navBgColor) {
      gsap.to(navBgColor, {
        opacity: targetOpacity,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  
    if (navBgColorSec) {
      gsap.to(navBgColorSec, {
        opacity: targetOpacity,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  
    gsap.to(mainNavigation, {
      paddingTop: targetPadding,
      paddingBottom: targetPadding,
      duration: 0.5,
      ease: "power2.out"
    });
  }
  
  // Add the DOMContentLoaded event listener to set the initial opacity
  document.addEventListener('DOMContentLoaded', setInitialOpacity);
  
  // Add the scroll event listener
  window.addEventListener('scroll', updateNavOpacity);
  
  