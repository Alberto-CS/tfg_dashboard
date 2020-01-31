import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDHLdsijLCDeBrc1OB9zmKSO6w0ti4hADQ",
    authDomain: "allergen-602a2.firebaseapp.com",
    databaseURL: "https://allergen-602a2.firebaseio.com",
    projectId: "allergen-602a2",
    storageBucket: "allergen-602a2.appspot.com",
    messagingSenderId: "48200690510",
    appId: "1:48200690510:web:756eaed99f2780dd03cc1f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  const storage = firebase.storage();

  export default {storage, firebase};