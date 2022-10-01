$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //toggle menu
  $(".navbar .menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".navbar .menu-btn i ").toggleClass("active");
  });

  // typing animation
  var typed = new Typed(".typing-2", {
    strings: ["Web Developer.", "JavaScript Developer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing", {
    strings: ["Web Developer.", "JavaScript Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl-carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoPlayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 3,
      },

      100: {
        items: 1,
      },
    },
  });

  $(".owl-carousel .owl-item").on("mouseenter", function (e) {
    $(this).closest(".owl-carousel").trigger("stop.owl.autoplay");
  });
  $(".owl-carousel .owl-item").on("mouseleave", function (e) {
    $(this).closest(".owl-carousel").trigger("play.owl.autoplay", [3000]);
  });
});
