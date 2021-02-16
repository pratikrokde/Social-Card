import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB0KvCF-BGwqT2IBGaDT6NneBofwU2IaF8",
  authDomain: "react-social-cards.firebaseapp.com",
  projectId: "react-social-cards",
  storageBucket: "react-social-cards.appspot.com",
  messagingSenderId: "269941974028",
  appId: "1:269941974028:web:196e9b32508e1a10f17a29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
