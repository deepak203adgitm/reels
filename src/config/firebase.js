import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCDSRUKVVhnj_uKlPLMX00a-2VVUwg5HYU",
  authDomain: "reelsproj.firebaseapp.com",
  projectId: "reelsproj",
  storageBucket: "reelsproj.appspot.com",
  messagingSenderId: "1063582511688",
  appId: "1:1063582511688:web:9395ff770e383208ac9e7d"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;