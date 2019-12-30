import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMxdrpMAjR5Anay4txtoD5BWjEmX3cVaE",
  authDomain: "reactzzaria-00.firebaseapp.com",
  databaseURL: "https://reactzzaria-00.firebaseio.com",
  projectId: "reactzzaria-00",
  storageBucket: "",
  messagingSenderId: "1096722069917",
  appId: "1:1096722069917:web:e19fe0b92a002d5c565774"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
