import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

var firebaseConfig = {
    apiKey: "AIzaSyACKDuap0GkL9mJ4wVQR8lY9YqWfgpwLkk",
    authDomain: "crud-89480.firebaseapp.com",
    databaseURL: "https://crud-89480.firebaseio.com",
    projectId: "crud-89480",
    storageBucket: "crud-89480.appspot.com",
    messagingSenderId: "176460601036",
    appId: "1:176460601036:web:a4f06e29babc5197d9d469"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}