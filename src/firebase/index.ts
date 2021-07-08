import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDv8PicjMTRmqBzvjIaQYRWxUSjb6XPD3o",
    authDomain: "m152-prozedur.firebaseapp.com",
    projectId: "m152-prozedur",
    storageBucket: "m152-prozedur.appspot.com",
    messagingSenderId: "233339858301",
    appId: "1:233339858301:web:5e7333c43d335cf57f3014",
    measurementId: "G-VMV61LE985"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export { storage, firebase as default }