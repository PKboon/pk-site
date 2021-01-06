// Header Section
// navbar appear white when scroll up
function checkScroll() {
  let startY = $(".navbar").height(); //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $(".navbar").addClass("scrolled");
    $(".navbar-brand").addClass("yellow");
    $(".contact-info").addClass("yellow");
  } else {
    $(".navbar").removeClass("scrolled");
    $(".navbar-brand").removeClass("yellow");
    $(".contact-info").removeClass("yellow");
  }
}
// navbar appear white when scroll up
if ($(".navbar").length > 0) {
  $(window).on("scroll load resize", function() {
    checkScroll();
  });
}

// navbar, while on Home, toggle black and transparent if click the menu btn
$(".navbar-toggler").click(function() {
  $("nav").toggleClass("nav-toggler-black-navbar");
});

// navbar collapse when click any menu list
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// navbar collapse when click any anywhere on the dropdown
$("#navbar-menus").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

//ABOUT SECTION
$(".achieved-exp").addClass("achieve");
$("#less-exp").addClass("achieve");

$("#more-exp").click(function() {
  $(".achieved-exp").toggleClass("achieve");
  $("#less-exp").toggleClass("achieve");
  $("#more-exp").toggleClass("achieve");
});

$("#less-exp").click(function() {
  $(".achieved-exp").toggleClass("achieve");
  $("#less-exp").toggleClass("achieve");
  $("#more-exp").toggleClass("achieve");
});

// PROJECT
$(".achieved-prj").addClass("achieve");
$("#less-prj").addClass("achieve");

$("#more-prj").click(function() {
  $(".achieved-prj").toggleClass("achieve");
  $("#less-prj").toggleClass("achieve");
  $("#more-prj").toggleClass("achieve");
});

$("#less-prj").click(function() {
  $(".achieved-prj").toggleClass("achieve");
  $("#less-prj").toggleClass("achieve");
  $("#more-prj").toggleClass("achieve");
});

$(".prj-info").addClass("noshow");
$(".prj-info-btn").hover(function() {
  $(this).parent().parent().find(".prj-info").toggleClass("noshow");
});

if ($(window).width() > 768) {
  //TEAM SECTION
  $(".zoom").hover(function() {
    $(".zoom-img", this).addClass("zoom-img-animate");
    $(".btn-group", this).addClass("btn-group-animate");
  }, function() {
    $(".zoom-img", this).removeClass("zoom-img-animate");
    $(".btn-group", this).removeClass("btn-group-animate");
  });

  $(".zoom-img").addClass("zoom-img-animate");
  $(".btn-group").addClass("btn-group-animate");
  $(".zoom").click(function() {
    $(".zoom-img", this).toggleClass("zoom-img-animate");
    $(".btn-group", this).toggleClass("btn-group-animate");
  });
}
