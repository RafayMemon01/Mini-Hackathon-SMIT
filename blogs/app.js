const firebaseConfig = {
  apiKey: "AIzaSyCHuN6b9G7MMjLCGJ3acYix5b976mmZ_Pc",
  authDomain: "authfirebase-a5385.firebaseapp.com",
  projectId: "authfirebase-a5385",
  storageBucket: "authfirebase-a5385.appspot.com",
  messagingSenderId: "371255372345",
  appId: "1:371255372345:web:8c4ba6eadbd08e399ebbe8",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("createPost").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("postTitle").value;
  const text = document.getElementById("postText").value;

 const posts = db.collection("posts")
 posts.doc("post").set
    ({
      title: title,
      text: text,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
    console.error("Error adding document: ", error);
});
});
