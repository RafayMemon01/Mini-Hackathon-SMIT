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
document.getElementById("loginForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cra) => {
      console.log("User Login Success");
      window.location.href = "../blogs";
    })
    .catch((err) => {
      console.log("Error login user");
    });
});
