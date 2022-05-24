// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARMI61_M4eCmiuPqfjjQl1c5bLKLwP_as",
    authDomain: "cripto-hans-huanca.firebaseapp.com",
    projectId: "cripto-hans-huanca",
    storageBucket: "cripto-hans-huanca.appspot.com",
    messagingSenderId: "296958448343",
    appId: "1:296958448343:web:92c98c72f716e699b85692"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db