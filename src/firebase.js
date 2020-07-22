import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOHnFc_NeRBEBPkFlCZ-lrpwu_I28vnzE",
    authDomain: "auth-2020-fdc54.firebaseapp.com",
    databaseURL: "https://auth-2020-fdc54.firebaseio.com",
    projectId: "auth-2020-fdc54",
    storageBucket: "auth-2020-fdc54.appspot.com",
    messagingSenderId: "891719640483",
    appId: "1:891719640483:web:6235ef3b4d2239fd97e616"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }