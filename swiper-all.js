function numberWithZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  
  $(".slider-gallery_component").each(function(index) {
    let totalSlides = numberWithZero($(this).find(".swiper-slide.is-slider-thumbs").length);
    $(".swiper-number-total").text(totalSlides);
  
  
    // Set loopedSlides dynamically
    //let loopedSlidesValue = Math.ceil(totalSlides - (8 / 2));
    //let loopedSlidesValue = Math.ceil(totalSlides / 2);
    let loopedSlidesValue = 3.5;
  
  
    const textSwiper = new Swiper($(this).find(".swiper.is-slider-titles")[0], {
      slidesPerView: 1,
      direction: 'vertical',
      speed: 800,
      loop: true,
      //loopedSlides: 8,
      slideToClickedSlide: false,
      //mousewheel: true,
      //keyboard: true,
      centeredSlides: false,
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0]
      }
    });
  
    const bgSwiper = new Swiper($(this).find(".swiper.is-slider-bg")[0], {
      modules: [SwiperGL],
      slidesPerView: 1,
      speed: 800,
      effect: "gl",
      gl: { shader: "peel-x" },
      loop: true,
      loopedSlides: loopedSlidesValue,
      slideToClickedSlide: true,
      mousewheel: true,
      keyboard: true,
      centeredSlides: false,
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0]
      }
    });
  
  
    const thumbsSwiper = new Swiper($(this).find(".swiper.is-slider-thumbs")[0], {
      slidesPerView: 1,
      speed: 800,
      loop: true,
      loopedSlides: loopedSlidesValue,
      centeredSlides: false,
      mousewheel: true,
      keyboard: true,
      slideToClickedSlide: true,
      thumbs: {
        swiper: textSwiper,
      }
    });
  
  
  
    thumbsSwiper.controller.control = bgSwiper;
    bgSwiper.controller.control = thumbsSwiper;
  
    textSwiper.on("slideChange", function(e) {
      let slideNumber = numberWithZero(e.realIndex + 1);
      $(".swiper-number-current").text(slideNumber);
    });
  });
  