import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

import App from './App';
import fbConfig from './config/fbConfig';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer,
    //to make this implementation of firestore and firebase to work, stick with following version redux-firestore@0.5.7, react-redux-firebase@2.1.8
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {
            //for broadcast when connection with firestore auth is established
            attachAuthIsReady: true
        })
    )
) 

//rp render dom elements only after connection is firebase is establsihed (for better UX via avoiding glitches)
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
