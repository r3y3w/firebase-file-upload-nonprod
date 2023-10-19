import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBj6IAQC5LLdT043nXcpNvL5CZtJ0GJ1Sw",
  authDomain: "uploadingfile-d5eaf.firebaseapp.com",
  projectId: "uploadingfile-d5eaf",
  storageBucket: "uploadingfile-d5eaf.appspot.com",
  messagingSenderId: "515636496665",
  appId: "1:515636496665:web:640616996ef41553f91d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
