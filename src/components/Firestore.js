import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA4RnBvWmz2b9iQ3hs8SUqT1cN4yfr7hXI",
    authDomain: "smart-trolley-6b841.firebaseapp.com",
    databaseURL: "https://smart-trolley-6b841.firebaseio.com",
    projectId: "smart-trolley-6b841",
    storageBucket: "smart-trolley-6b841.appspot.com",
    messagingSenderId: "208262669982",
 };
 const fire = firebase.initializeApp(config);
 const db = firebase.firestore();

 export {db, fire, firebase};
