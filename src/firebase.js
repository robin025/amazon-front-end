import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJOhPv4UzGB5UOdUippFbZNhgeqaJ6-Zs",
  authDomain: "ammazon-web-app.firebaseapp.com",
  databaseURL: "https://ammazon-web-app.firebaseio.com",
  projectId: "ammazon-web-app",
  storageBucket: "ammazon-web-app.appspot.com",
  messagingSenderId: "554926097167",
  appId: "1:554926097167:web:79afb4e67f3e86d171347a",
  measurementId: "G-NCQ7NVMJT9",
});

const authentication = firebase.auth();

export { authentication };
