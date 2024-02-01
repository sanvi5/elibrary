import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {
	apiKey: "AIzaSyChLSqpHRkG1zA8SwwX29866EC-Qk8Zr28",
  authDomain: "e-library-bf561.firebaseapp.com",
  projectId: "e-library-bf561",
  storageBucket: "e-library-bf561.appspot.com",
  messagingSenderId: "523140901327",
  appId: "1:523140901327:web:4b1034d55010cbab3f4aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
