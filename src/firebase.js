import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBBJ2SZL5KRRH9B2TDx14HOgCRanZN55MI",
    authDomain: "tik-tok-clone-4c087.firebaseapp.com",
    projectId: "tik-tok-clone-4c087",
    storageBucket: "tik-tok-clone-4c087.appspot.com",
    messagingSenderId: "309918201212",
    appId: "1:309918201212:web:9142e61a138b167a93a0f9"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
export default db;