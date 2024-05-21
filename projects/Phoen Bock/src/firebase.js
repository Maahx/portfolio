import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJYvkapUn6EaAUl2p-sZPVdWKdO6AIPWM",
  authDomain: "adress-d0014.firebaseapp.com",
  databaseURL: "https://adress-d0014-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adress-d0014",
  storageBucket: "adress-d0014.appspot.com",
  messagingSenderId: "319852348183",
  appId: "1:319852348183:web:94e23f4ede00a7736e2d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const storage = getStorage(app);