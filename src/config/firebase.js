import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDyzxwwhdL4ZmXX_Jxhr2b33oY2_59F6t8",
    authDomain: "fir-auth-prototype-69014.firebaseapp.com",
    projectId: "fir-auth-prototype-69014",
    storageBucket: "fir-auth-prototype-69014.appspot.com",
    messagingSenderId: "1076486112765",
    appId: "1:1076486112765:web:adf2c3fdc15be1feeb8594"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
