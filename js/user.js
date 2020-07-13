// var ddData = [
//   {
//     // text: "JP",
//     value: 1,
//     selected: true,
//     imageSrc: "img/flag-jp.jpg"
//   },
//   {
//     // text: "US",
//     value: 2,
//     selected: false,
//     imageSrc: "img/flag-us.jpg"
//   },
//   {
//     // text: "VN",
//     value: 3,
//     selected: false,
//     imageSrc: "img/flag-vn.jpg"
//   }
// ];
      
// $('#language').ddslick({
//   data: ddData,
//   width: 50,
//   background: "#111b30"
// });

// Mmenu for SP
document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu( "#menu-responsive", {
      "slidingSubmenus": false,
      "extensions": [
        "pagedim-black",
        "position-front"
      ],
      "dividers": {
        "addTo": "menu__divider"
      }
    } );
  }
);

//<select> language, country
$('.language').click(function () {
  $(".language__span").toggleClass("language__span_click");
  $(".language__list").toggleClass("language__list_active");
});

$(document).click(function (e) {
  var el = $(".language");
  var event_element = e.target ? e.target : e.srcElement;
  if( !event_element.closest(".language") ) {
    $(".language__span").removeClass("language__span_click");
    $(".language__list").removeClass("language__list_active");
  }
});