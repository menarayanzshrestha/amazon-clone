import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKjONJ7DNzbvjs6oLlPlfnA9wo3zEj6x8",
  authDomain: "clone-78aed.firebaseapp.com",
  databaseURL: "https://clone-78aed.firebaseio.com",
  projectId: "clone-78aed",
  storageBucket: "clone-78aed.appspot.com",
  messagingSenderId: "134701014344",
  appId: "1:134701014344:web:b6a1e301e2beff31a1277d",
  measurementId: "G-T5WTEWLCV2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
