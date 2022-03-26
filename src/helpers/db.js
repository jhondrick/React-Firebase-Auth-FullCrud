import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA7-4lKaOoSd0HnEQO9V6FYGpETsqFBc6c",
    authDomain: "loginauth-571be.firebaseapp.com",
    databaseURL: "https://loginauth-571be.firebaseio.com",
    projectId: "loginauth-571be",
    storageBucket: "loginauth-571be.appspot.com",
    messagingSenderId: "593215165732",
    appId: "1:593215165732:web:fb6006bc378f6d599b0fb1"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;