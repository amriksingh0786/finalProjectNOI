import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBURBEJXXXKOd-SdfKQ9hFX9y2oycKUFns",
    authDomain: "finallogin-73367.firebaseapp.com",
    projectId: "finallogin-73367",
    storageBucket: "finallogin-73367.appspot.com",
    messagingSenderId: "485781415803",
    appId: "1:485781415803:web:ad6abc8d7b9110f278bfde",
    measurementId: "G-B822TJY3LL"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };