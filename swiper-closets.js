function numberWithZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  
  $(".slider-gallery_component-closets").each(function(index) {
    let totalSlides2 = numberWithZero($(this).find(".swiper-slide.is-slider-thumbs.2").length);
    $(".swiper-number-total.2").text(totalSlides2);
  
  
    const textSwiper2 = new Swiper($(this).find(".swiper.is-slider-titles.2")[0], {
      slidesPerView: 1,
      direction: 'vertical',
      speed: 600,
      loop: true,
      //loopedSlides: 8,
      slideToClickedSlide: false,
      //mousewheel: true,
      //keyboard: true,
      centeredSlides: false,
      slideActiveClass: "is-active2",
      slideDuplicateActiveClass: "is-active2",
      navigation: {
        nextEl: $(this).find(".swiper-next2")[0],
        prevEl: $(this).find(".swiper-prev2")[0]
      }
    });
  
    const bgSwiper2 = new Swiper($(this).find(".swiper.is-slider-bg.2")[0], {
      modules: [SwiperGL],
      slidesPerView: 1,
      speed: 600,
      effect: "gl",
      gl: { shader: "peel-x" },
      loop: true,
      loopedSlides: 10,
      slideToClickedSlide: true,
      mousewheel: true,
      keyboard: true,
      centeredSlides: false,
      slideActiveClass: "is-active2",
      slideDuplicateActiveClass: "is-active2",
      navigation: {
        nextEl: $(this).find(".swiper-next2")[0],
        prevEl: $(this).find(".swiper-prev2")[0]
      }
    });
  
  
    const thumbsSwiper2 = new Swiper($(this).find(".swiper.is-slider-thumbs.2")[0], {
      slidesPerView: 1,
      speed: 600,
      loop: true,
      loopedSlides: 10,
      centeredSlides: false,
      mousewheel: true,
      keyboard: true,
      slideToClickedSlide: true,
      thumbs: {
        swiper: textSwiper2,
      }
    });
  
  
  
    thumbsSwiper2.controller.control = bgSwiper2;
    bgSwiper2.controller.control = thumbsSwiper2;
  
    textSwiper2.on("slideChange", function(e) {
      let slideNumber2 = numberWithZero(e.realIndex + 1);
      $(".swiper-number-current.2").text(slideNumber2);
    });
  });
  