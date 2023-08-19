const firebaseConfig = {
  apiKey: "AIzaSyCHuN6b9G7MMjLCGJ3acYix5b976mmZ_Pc",
  authDomain: "authfirebase-a5385.firebaseapp.com",
  projectId: "authfirebase-a5385",
  storageBucket: "authfirebase-a5385.appspot.com",
  messagingSenderId: "371255372345",
  appId: "1:371255372345:web:8c4ba6eadbd08e399ebbe8",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let checkpassword = document.getElementById("passwordcheck").value;
  if (password !== checkpassword) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Password Not Match",
      footer: '<p>Passwords Must Be Match With Confirm Password</p>',
    });
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cra) => {
        console.log("User created");
        Swal.fire({
          icon: "success",
          title: "Successfully Signup",
          footer: '<a href="../login">Goto Login</a>',
        });
      })
      .catch((err) => {
        let errorParagraph = document.getElementById("errormessage");
        let errorMessage = err.message;

        errorParagraph.textContent = errorMessage;
        console.log("Error creating user", err);
        
      });
  }
});
