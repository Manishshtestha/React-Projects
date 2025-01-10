// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { apiKey } from "./api";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: {apiKey: apiKey},
	authDomain: "vite-contacts-38c2a.firebaseapp.com",
	projectId: "vite-contacts-38c2a",
	storageBucket: "vite-contacts-38c2a.firebasestorage.app",
	messagingSenderId: "836372525368",
	appId: "1:836372525368:web:f6792b95befa6d762d51cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);