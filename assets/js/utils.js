(function (jQuery) {
  /**
   * @params {JqueryElement} targetElement
   * @params {JqueryElement} boundaryElement
   * @params {Object} options
   */

  function spyElement(targetElement, boundaryElement, options) {
    const targetPos = boundaryElement.get(0).getBoundingClientRect();

    if (targetPos[options.boundary] <= options.value) {
      targetElement.addClass(options.cls);
    } else {
      targetElement.removeClass(options.cls);
    }
  }

  function throttle(fn, delay) {
    let lastTime = 0;

    return function () {
      let now = new Date();

      if (now - lastTime >= delay) {
        fn.apply(this, arguments);
        lastTime = now;
      }
    };
  }

  jQuery.exists = function (selector) {
    return $(selector).length > 0;
  };

  window.throttle = throttle;
  window.spyElement = spyElement;
})(jQuery);
