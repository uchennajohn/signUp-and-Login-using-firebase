// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG6sqti5ZyQ0g7-EUxZl9OTMYrbcYqU04",
  authDomain: "fblogin-cb96b.firebaseapp.com",
  projectId: "fblogin-cb96b",
  storageBucket: "fblogin-cb96b.appspot.com",
  messagingSenderId: "876764888414",
  appId: "1:876764888414:web:52c24df592b2eeda36e3cf"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0 ) {
    app =  firebase.initializeApp(firebaseConfig);
}else{
    app= firebase.app()
}

const auth = firebase.auth()

export { auth }
