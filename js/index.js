// ----------------------------------NAV BAR--------------------------------
$("#toggle").click(function() {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

$(".menu li a").on("click", function() {
  $("#toggle").click();
});

// --------------------------------------WOW JS-----------------------------------------------------

window.addEventListener("scroll", function(e) {
  if ($(window).scrollTop() <= 50) {
    $(".wow").removeClass("animated");
    $(".wow").removeAttr("style");
    new WOW().init();
  }
});

// -----------------------------PARALLAX AND NAV SCROLL------------------------------------

$(document).ready(function() {
  $(".parallax").parallax();
  console.log(" jjsdbjsjdbfkjb");
  $("a.scrollLink").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500
    );
  });
});
