import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQIJs9mOc14aTrK-XMtb9iHwKoXpB6gmE",
    authDomain: "chatme-sami.firebaseapp.com",
    projectId: "chatme-sami",
    storageBucket: "chatme-sami.appspot.com",
    messagingSenderId: "356362020073",
    appId: "1:356362020073:web:701f838aef39d42fa77c78"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider};