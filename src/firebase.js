import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpfnVIuAL36u2fgyxU2Hf-PT43DuaMgi0",
  authDomain: "twitter-2dedd.firebaseapp.com",
  projectId: "twitter-2dedd",
  storageBucket: "twitter-2dedd.appspot.com",
  messagingSenderId: "956705906796",
  appId: "1:956705906796:web:29ee4aed431b161d39b849",
  measurementId: "G-MM7DLNB82B"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

   