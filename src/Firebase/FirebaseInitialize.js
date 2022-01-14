import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialize;