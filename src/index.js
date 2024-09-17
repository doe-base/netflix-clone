import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { firebase, db } from './lips/firebase.prod'; // add firebase to project
import { FirebaseContext } from './context/firebase' // use FirebaseContext to pass firebase from here
 

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <> 
        <FirebaseContext.Provider value={{ firebase, db }}> 
            <GlobalStyle/> 
            <App />
        </FirebaseContext.Provider>
    </>
);


 