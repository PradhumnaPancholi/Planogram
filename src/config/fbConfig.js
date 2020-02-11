import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

// app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXGQXOJBsGUXbr9xpO_vuHEIQQEDYrM5w",
    authDomain: "planogram-85f37.firebaseapp.com",
    databaseURL: "https://planogram-85f37.firebaseio.com",
    projectId: "planogram-85f37",
    storageBucket: "planogram-85f37.appspot.com",
    messagingSenderId: "686922632873",
    appId: "1:686922632873:web:2a5ff112d7929787fba3b8",
    measurementId: "G-QZPE0FZ8HS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase