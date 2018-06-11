import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAdWmjtB7PZZLqJ3WDdd1nzDgGbCZRC_1A",
  authDomain: "cinema-81826.firebaseapp.com",
  databaseURL: "https://cinema-81826.firebaseio.com",
  projectId: "cinema-81826",
  storageBucket: "cinema-81826.appspot.com",
  messagingSenderId: "932850777862"
  };
  firebase.initializeApp(config);

export default firebase;
