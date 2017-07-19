function responsiveNav() {
    var x = document.getElementById("navjs");
    if (x.className === "navi") {
        x.className += " responsive";
    } else {
        x.className = "navi";
    }
}


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav a').addClass('shrink');
    $('#brand').addClass('shrink');
    $('nav ul').addClass('shrink');
    $('nav').addClass('shrink');
  } else {
    $('nav a').removeClass('shrink');
    $('#brand').removeClass('shrink');
    $('nav ul').removeClass('shrink');
    $('nav').removeClass('shrink');
  }
});
