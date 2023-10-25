import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfigProd = {
  apiKey: 'AIzaSyD_eQdXtVHlNlHbakeFNlVD9AtoQOVrmec',
  authDomain: 'mountainpass-a0be3.firebaseapp.com',
  projectId: 'mountainpass-a0be3',
  storageBucket: 'mountainpass-a0be3.appspot.com',
  messagingSenderId: '780750827578',
  appId: '1:780750827578:web:49cfab0985b22899164503',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigProd);
}

export const db = firebase.firestore();
