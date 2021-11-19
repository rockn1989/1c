$(function () {
  /* 
    Массив со стоимостью тарифов по месяцам.
    1-е значение - стоимость базового тарифа
    2-е значение - стоимость профессионального тарифа
    3-е значение - стоимость бизнес тарифа
  */

  let monthPrice = {
    month1: ["от 1100р.", "от 1550р.", "от 1900р."],
    month3: ["от 1050р.", "от 1500р.", "от 1850р."],
    month6: ["от 950р.", "от 1400р.", "от 1750р."],
    month12: ["от 950р.", "от 1400р.", "от 1750р."],
  };

  $(".js__custom-select").on("change", function () {
    let prices;

    switch (this.value) {
      case "month6":
        prices = monthPrice.month6;
        break;
      case "month3":
        prices = monthPrice.month3;
        break;
      case "month1":
        prices = monthPrice.month1;
        break;
      default:
        prices = monthPrice.month12;
    }

    update(prices);
  });

  function update(pricesArray) {
    $(".tariff-card").each(function (i, el) {
      $(el).find("span.tariff-card__price-value").text(pricesArray[i]);
    });
  }

  var calcPrices = {
    userPrice: 1000,
    gbPrice: 70,
    rdb: 400,
    sql: 200,
  };

  /**
   * Calculator
   */

  function Calculator(userCount, gbCount, priceList) {
    var _self = this;
    this.isCheckedRdb = $("#rdp").attr("checked") ? true : false;
    this.isCheckedSql = $("#sql").attr("checked") ? true : false;
    this.rdbPrice = this.isCheckedRdb ? priceList.rdb : 0;
    this.sqlPrice = this.isCheckedSql ? priceList.sql : 0;
    this.total = 0;
    this.totalHTML = $(".total-price__value");
    this.userCount = userCount;
    this.gbCount = gbCount;
    this.userPrice = priceList.userPrice;
    this.gbPrice = priceList.gbPrice;

    this.addHandlerEvent = function () {
      $("#rdp, #sql").on("change", function () {
        if ($(this).is("#rdp")) {
          _self.isCheckedRdb = _self.isCheckedRdb === true ? false : true;
          if (_self.isCheckedRdb) {
            $("#ui-slider-2").slider({ min: 10, value: 10 });
            $(".slider-label__value.sql span.val").text(10);
            _self.gbCount = 10;
          } else {
            $("#ui-slider-2").slider({ min: 5, value: 5 });
            $(".slider-label__value.sql span.val").text(5);
            _self.gbCount = 5;
          }

          _self.rdbPrice = _self.isCheckedRdb ? priceList.rdb : 0;
          _self.renderTotal(_self.calcTotal());
        }

        if ($(this).is("#sql")) {
          _self.isCheckedSql = _self.isCheckedSql === true ? false : true;
          _self.sqlPrice = _self.isCheckedSql ? priceList.sql : 0;
          _self.renderTotal(_self.calcTotal());
        }
      });
    };

    this.calcTotal = function () {
      return (_self.total =
        _self.userCount * (_self.userPrice + _self.rdbPrice + _self.sqlPrice) +
        _self.gbPrice *
          ((_self.gbCount - 5 - (this.isCheckedRdb ? 5 : 0)) / 5));
    };

    this.renderTotal = function (total) {
      _self.totalHTML.text(total);
    };

    var uiSlider1 = function () {
      $("#ui-slider-1").slider({
        min: 1,
        max: 10,
        step: 1,
        value: _self.userCount,
        range: "min",
        create: function (event, ui) {
          var val = $("#ui-slider-1").slider("value");
          $(".slider-label__value.user span.val").text(val);
        },
        slide: function (event, ui) {
          $(".slider-label__value.user span.val").text(ui.value);
          _self.userCount = ui.value;
          _self.renderTotal(_self.calcTotal());
        },
      });

      $("#ui-slider-1").draggable();
    };

    var uiSlider2 = function () {
      $("#ui-slider-2").slider({
        min: 10,
        max: 50,
        step: 5,
        value: _self.gbCount,
        range: "min",
        create: function (event, ui) {
          var val = $("#ui-slider-2").slider("value");
          $(".slider-label__value.sql span.val").text(val);
        },
        slide: function (event, ui) {
          $(".slider-label__value.sql span.val").text(ui.value);
          _self.gbCount = ui.value;
          _self.renderTotal(_self.calcTotal());
        },
      });
      $("#ui-slider-2").draggable();
    };

    this.addHandlerEvent();
    this.calcTotal();
    this.totalHTML.text(this.calcTotal());
    uiSlider1();
    uiSlider2();
  }

  let defaultCountUsers = 4,
    defaultCountGb = 25;

  new Calculator(defaultCountUsers, defaultCountGb, calcPrices);

  /**
   * Show service list
   */

  $(".js__show-service").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("showed")) {
      $(".service-list .service-card").removeClass("uk-hidden");

      $(this).text("Скрыть").addClass("showed");
    } else {
      $.each($(".service-list .service-card"), function (idx, el) {
        if (idx + 1 > 8) {
          $(".service-card").eq(idx).addClass("uk-hidden");
        }
      });

      $(this).text("Показать еще 20 сервисов").removeClass("showed");
    }
  });
});
