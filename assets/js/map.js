$(function () {
  /*______ Яндекс карта ______*/

  if ($.exists(".map")) {
    ymaps.ready(init1);
    ymaps.ready(init2);
  }

  function init1() {
    var myMap = new ymaps.Map("map-1", {
      center: [55.76057, 37.718238],
      controls: ["zoomControl"],
      zoom: 17,
    });

    var ballonContent = `<div class="ballon-content"><div class="ballon-title">1С:Виктория</div>
    <div class="ballon-body">
        <span> Москва, м. Авиамоторная, ул. 2-ая Синичкина, д.9А стр.10, бизнес-центр «Синица - Плаза», этаж 4
        </span>
      </div>
    `;

    var placeMark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        balloonContentBody: ballonContent,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/icon-svg/pin.svg",
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -64],
      }
    );

    myMap.geoObjects.add(placeMark);
  }

  function init2() {
    var myMap = new ymaps.Map("map-2", {
      center: [59.899803, 30.40101],
      controls: ["zoomControl"],
      zoom: 17,
    });

    var ballonContent = `<div class="ballon-content"><div class="ballon-title">1С:Виктория</div>
    <div class="ballon-body">
        <span>Санкт-Петербург, ул. Седова, д. 11, лит. А, 1 этаж, оф. 918, 922
        </span>
      </div>
    `;

    var placeMark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        balloonContentBody: ballonContent,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/icon-svg/pin.svg",
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -64],
      }
    );

    myMap.geoObjects.add(placeMark);
  }
});
