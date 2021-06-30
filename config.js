import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCjz-H9SKyZycfy4aIhr6b3NGWe8GXf9bo",
    authDomain: "storyhub-80aeb.firebaseapp.com",
    projectId: "storyhub-80aeb",
    storageBucket: "storyhub-80aeb.appspot.com",
    messagingSenderId: "1049078040610",
    appId: "1:1049078040610:web:dbcc4a964dbd09c61be27b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();