// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { api } from "./api";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: {api:api},
	authDomain: "vite-classroom.firebaseapp.com",
	projectId: "vite-classroom",
	storageBucket: "vite-classroom.firebasestorage.app",
	messagingSenderId: "935346773681",
	appId: "1:935346773681:web:78ba4d7069311ffb990c90",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);