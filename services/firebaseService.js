import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfigProd = {
  apiKey: "AIzaSyBNFjlWEU2zeTwvzpyNlew21kXQCOl836A",
  authDomain: "front-vercel.firebaseapp.com",
  projectId: "front-vercel",
  storageBucket: "front-vercel.appspot.com",
  messagingSenderId: "925268636766",
  appId: "1:925268636766:web:172423a6dbf85bd22870cf",
  measurementId: "G-C51DPMLW8X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigProd);
}

export const db = firebase.firestore();
