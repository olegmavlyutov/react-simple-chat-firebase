import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDO2bX2DNy2F67B8ykSGvGGt6ZEWet9DOY",
    authDomain: "react-simple-chat-firebase.firebaseapp.com",
    databaseURL: "https://react-simple-chat-firebase.firebaseio.com",
    projectId: "react-simple-chat-firebase",
    storageBucket: "react-simple-chat-firebase.appspot.com",
    messagingSenderId: "614168984043",
    appId: "1:614168984043:web:3811f9c814beae0fe001ae"
};

firebase.initializeApp(firebaseConfig);