import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbhgIzfShk_LedV7V-VQ9wQNhTnMRnCcA",
  authDomain: "dexter-c399f.firebaseapp.com",
  databaseURL: "https://dexter-c399f-default-rtdb.firebaseio.com/",
  projectId: "dexter-c399f",
  storageBucket: "dexter-c399f.appspot.com",
  messagingSenderId: "99073012200",
  appId: "1:99073012200:android:b2f4ff98ee413c1748f45d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
