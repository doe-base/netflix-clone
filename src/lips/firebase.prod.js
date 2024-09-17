// Initialize Firebase      Initialize Firebase
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
//import { seedDatabase } from '../seed'; //(use seedDatabase just once after initial initialization)


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID
};

const firebase = Firebase.initializeApp(config);
const db = getFirestore(firebase);

//seedDatabase(firebase)  //(use seedDatabase just once after initial initialization)

export { firebase, db } 