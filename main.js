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
    strings: [
      "Web Developer.",
      "JavaScript Developer.",
      "Python Developer.",
      "Freelancer.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "JavaScript Developer",
      "Python Developer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl-carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoPlayTimeOut: 2000,
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
});

// Send email

function initializeApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyDv8lck4LnX6QN60Joa3FCCRzkS8pQWsDQ",
    authDomain: "my-portfolio-form.firebaseapp.com",
    // databaseURL: "https://my-portfolio-form-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-form",
    storageBucket: "my-portfolio-form.appspot.com",
    messagingSenderId: "1094802953171",
    appId: "1:1094802953171:web:e7abf9dd3f01014e5bd526",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // collection
  let contactInfo = firebase.database().ref("contact-data");

  document
    .querySelector(".contact-form")
    .addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    // get input value
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message);
  }

  // save data to firebase
  function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  }
}
