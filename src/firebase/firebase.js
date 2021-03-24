import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGm-WXPrcwEGe4oEN--VLgH-zTOFW06zk",
  authDomain: "medical-system-frontend.firebaseapp.com",
  projectId: "medical-system-frontend",
  storageBucket: "medical-system-frontend.appspot.com",
  messagingSenderId: "527950845325",
  appId: "1:527950845325:web:fc50f797dfb633fa9419c4",
  measurementId: "G-ZB1PGJ3464",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
