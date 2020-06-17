const email = document.getElementById("email")
const container = document.getElementById("container__item")
const submitBox = document.getElementById("submitBox")

var firebaseConfig = {
    apiKey: "AIzaSyBdShzC5q_1aNJLNQ6GpkT4HNGV1eeXctw",
    authDomain: "goalsemails.firebaseapp.com",
    databaseURL: "https://goalsemails.firebaseio.com",
    projectId: "goalsemails",
    storageBucket: "goalsemails.appspot.com",
    messagingSenderId: "642244251441",
    appId: "1:642244251441:web:bf0129446857561a266a10",
    measurementId: "G-1V6YJ582QL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

document.getElementById("submitButton").onclick = function () { 
    if (validateEmail(email.value)) {
        firebase.database().ref().child('emails').push(email.value, function(error) {
            if (error) {
              alert("Something went wrong. Please try again." + error);
            } else {
                container.style.display = "none"
                submitBox.style.display = "inline-block"
            }
          }); 
    }
    else {
        alert("Please enter a valid email address.")
    }
};

function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

