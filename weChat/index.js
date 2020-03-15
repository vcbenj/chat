const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '\\public'));

// views is directory for all template files
app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');


// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
  
});
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
var firebaseConfig = {
  apiKey: "AIzaSyB6BNlylTq01fL6tg03EjlXvUV-sudXlyQ",
  authDomain: "wechat-8af4c.firebaseapp.com",
  databaseURL: "https://wechat-8af4c.firebaseio.com",
  projectId: "wechat-8af4c",
  storageBucket: "wechat-8af4c.appspot.com",
  messagingSenderId: "230298141511",
  appId: "1:230298141511:web:020dc8d485db98fcb14262",
  measurementId: "G-0SDEHSW76Q"
  };
  firebase.initializeApp(firebaseConfig);
  
var database = firebase.database();
app.get("/", function(req, res) {
	console.log("Received a request for /");
  res.write("Home rote");
  var messagesRef = firebase.database().ref("messages/");

messagesRef.set ({
   Sender: "Hi everybody"
});
	//res.render('page');
	res.end();
});
// Add the Firebase products that you want to use

// Add the Firebase products that you want to use
//require("https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js");
//require("https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js");




// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
// });

// var provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

// firebase.auth().signInWithRedirect(provider);

// firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   var user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });