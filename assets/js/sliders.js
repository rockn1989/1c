"use strict";

$(function () {
  /**
   * Hero slider
   */

  const $heroSlider = $(".hero-slider .slider"),
    sliderCounter = $(".hero-slider .slider__counter");

  $heroSlider.on("init reinit", function (event, slick) {
    sliderCounter.text("01");

    $(".hero-slider")
      .find(".slick-dots")
      .wrap("<div class='slider__controls'></div>");

    $(".slider__controls").append(sliderCounter);
    $heroSlider.find(".uk-container").append(".slider__controls");
  });

  $heroSlider
    .slick({
      arrows: true,
      dots: true,
      infinity: true,
      fade: true,
      cssEase: "linear",
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows: false,
          },
        },
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).eq(currentSlide).addClass("leave");
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).removeClass("leave");
      if (parseInt(currentSlide + 1, 10) < 10) {
        sliderCounter.text("0" + (currentSlide + 1));
      } else {
        sliderCounter.text(currentSlide + 1);
      }
    });

  /**
   * Clients slider
   */

  $(".clients-slider .slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
        },
      },
    ],
  });

  /**
   * Products slider
   */

  $(".products-slider .slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   * Main projects slider
   */

  $(".main-projects-slider .slider").slick({
    arrows: true,
    dots: true,
    infinite: false,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  /**
   * Projects slider
   */

  $(".projects-slider .slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  /**
   * Brands slider
   */

  $(".brands-slider .slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  /**
   * News slider
   */

  $(".news-slider .slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   * Reviews slider
   */

  $(".reviews-slider .slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   * Solutions slider
   */

  $(".solutions-slider .slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: false,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 350,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
});
