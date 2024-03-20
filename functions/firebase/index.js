// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyDlBPya-45ajS_9x27lL_6TBcWNmMhk8L4",
  authDomain: "posts-app-63482.firebaseapp.com",
  databaseURL: "https://posts-app-63482.firebaseio.com",
  projectId: "posts-app-63482",
  storageBucket: "posts-app-63482.appspot.com",
  messagingSenderId: "476032390285",
  appId: "1:476032390285:web:da399a93d74c618f7cbec4",
  measurementId: "G-XQBTD6HZSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default firestoreDatabase;

export const provider =  new GoogleAuthProvider()