// Initialize Firebase      Initialize Firebase
// Initialize Firebase      Initialize Firebase
// Initialize Firebase      Initialize Firebase
// Initialize Firebase      Initialize Firebase
// Initialize Firebase      Initialize Firebase

import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { seedDatabase } from '../seed'; //(use seedDatabase just once after initial initialization)


const config = {
    apiKey: "AIzaSyCVPG7T1_LcmNRPbpQ76eEoaBdT7LzmkrM",
    authDomain: "netflix-clone-30bd8.firebaseapp.com",
    projectId: "netflix-clone-30bd8",
    storageBucket: "netflix-clone-30bd8.appspot.com",
    messagingSenderId: "202672653693",
    appId: "1:202672653693:web:af732adbbd9c2ef2243814"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase)  //(use seedDatabase just once after initial initialization)

export { firebase } 