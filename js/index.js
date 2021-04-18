$(window).scroll(function() {
  var divH1 = $("#home").outerHeight() - $("nav").outerHeight();
  if ($(window).scrollTop() >= divH1) {
    $(".navbar-custom").css("background", "black");
  } else {
    $(".navbar-custom").css("background", "transparent");
  }
});
