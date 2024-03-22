// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
 
  // apiKey: "AIzaSyDlBPya-45ajS_9x27lL_6TBcWNmMhk8L4",
  // authDomain: "posts-app-63482.firebaseapp.com",
  // databaseURL: "https://posts-app-63482.firebaseio.com",
  // projectId: "posts-app-63482",
  // storageBucket: "posts-app-63482.appspot.com",
  // messagingSenderId: "476032390285",
  // appId: "1:476032390285:web:da399a93d74c618f7cbec4",
  // measurementId: "G-XQBTD6HZSM",


  apiKey: "AIzaSyBI7p9VcmEmdtogk3GqjUNIrz_kNT1u14g",
  authDomain: "precise-reality-324621.firebaseapp.com",
  databaseURL: "https://precise-reality-324621-default-rtdb.firebaseio.com",
  projectId: "precise-reality-324621",
  storageBucket: "precise-reality-324621.appspot.com",
  messagingSenderId: "671790327953",
  appId: "1:671790327953:web:8e0f22b2ea69d2cc347730",
  measurementId: "G-TBEJLSK4SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default firestoreDatabase;

export const provider =  new GoogleAuthProvider()