// function initializeApp() {
//   const firebaseConfig = {
//     apiKey: "AIzaSyDv8lck4LnX6QN60Joa3FCCRzkS8pQWsDQ",
//     authDomain: "my-portfolio-form.firebaseapp.com",
//     databaseURL: "https://my-portfolio-form-default-rtdb.firebaseio.com",
//     projectId: "my-portfolio-form",
//     storageBucket: "my-portfolio-form.appspot.com",
//     messagingSenderId: "1094802953171",
//     appId: "1:1094802953171:web:e7abf9dd3f01014e5bd526",
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   // collection
//   let contactInfo = firebase.database().ref("contact-data");

//   document
//     .querySelector(".contact-form")
//     .addEventListener("submit", submitForm);

//   function submitForm(e) {
//     e.preventDefault();

//     // get input value
//     let name = document.querySelector(".name").value;
//     let email = document.querySelector(".email").value;
//     let subject = document.querySelector(".subject").value;
//     let message = document.querySelector(".message").value;

//     console.log(name, email, subject, message);

//     saveContactInfo(name, email, subject, message);

//     document.querySelector(".contact-form").reset();
//   }

//   // save data to firebase
//   function saveContactInfo(name, email, subject, message) {
//     let newContactInfo = contactInfo.push();
//     newContactInfo.set({
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     });
//   }
// }
