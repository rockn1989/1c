$(function () {
  console.log("App start");

  /**
   * Header scroll to change class
   */
  if ($("#header").hasClass("header--theme-blue")) {
    const throttleSpy = throttle(spyElement, 100);

    const boundaryElement = $.exists(".sale-info")
      ? $(".sale-info")
      : $(".hero-slider");

    $(document).on("scroll", function () {
      throttleSpy($(".header.header--theme-blue"), boundaryElement, {
        boundary: "bottom",
        value: 60,
        cls: "lighting",
      });
    });
  }

  $(".js__toggle-hidden-block").on("click", function (e) {
    e.preventDefault();

    $(this)
      .toggleClass("open")
      .parent()
      .siblings(".hidden-block")
      .stop(true, true)
      .slideToggle(350);
  });

  /**
   * Mobile subnav-wrapper
   */

  $(".js__toggle-subnav-wrapper").on("click", function (evt) {
    evt.preventDefault();
    $(this)
      .toggleClass("open")
      .parents(".parent")
      .find(".subnav-wrapper")
      .stop(true, true)
      .slideToggle(350);
  });

  /**
   * Input tel mask
   */

  $(".js__input-mask")
    .mask("+7 999 999-99-99", { clearIfNotMatch: true })
    .focus(function (e) {
      if (!$(this).val()) {
        $(this).val("+7 ");
      }
    });

  /**
   * Form validate
   */

  if ($.exists(".default-form")) {
    $(".default-form").validate({
      rules: {
        ["user-email"]: {
          required: true,
          email: true,
        },
        ["user-tel"]: {
          required: true,
        },
      },

      messages: {
        ["user-tel"]: "Обязательноe поле",
        ["user-email"]: {
          required: "Обязательное поле",
          email: "Поле заполнено не верно",
        },
      },
    });
  }

  /**
   * Youtube
   */

  var $youtube = $(".youtube"),
    source = "https://img.youtube.com/vi/" + $youtube.data("embed") + "/0.jpg",
    image = new Image();

  image.src = source;
  image.addEventListener("load", function () {
    $youtube.append(image);
  });

  /**
   * Svg4everybody
   */

  svg4everybody();
});
