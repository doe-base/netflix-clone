import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { firebase } from './lips/firebase.prod'; // add firebase to project
import { FirebaseContext } from './context/firebase' // use FirebaseContext to pass firebase from here
 

ReactDOM.render(
<> 
    <FirebaseContext.Provider value={{ firebase }}> 
        <GlobalStyle/> 
        <App />
    </FirebaseContext.Provider>
</>, 
document.getElementById('root'));

 