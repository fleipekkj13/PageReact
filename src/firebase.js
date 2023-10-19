import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxPQQV8e8pTMk4TXI4VSuKE_C81S7w7z4",
    authDomain: "emailswebsite-e4df7.firebaseapp.com",
    projectId: "emailswebsite-e4df7",
    storageBucket: "emailswebsite-e4df7.appspot.com",
    messagingSenderId: "642580153446",
    appId: "1:642580153446:web:511ce69af428247f3b59a7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};