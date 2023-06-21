import firebase from "firebase/compat/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgr6ITev8JrxaAZGLh9UsZKfI_EjLLkY8",
  authDomain: "web-streaming-app.firebaseapp.com",
  projectId: "web-streaming-app",
  storageBucket: "web-streaming-app.appspot.com",
  messagingSenderId: "834345429279",
  appId: "1:834345429279:web:0fa57a730cf6641ea7282a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();
const analytics = getAnalytics(firebaseApp);
logEvent(analytics, "notification_received");

export { auth, googleAuth };
export default db;
