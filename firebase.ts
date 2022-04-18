// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGRhMDDdCRpB324vSCtQ01iCxonvfXAYE",
    authDomain: "next-twitter-2e76a.firebaseapp.com",
    projectId: "next-twitter-2e76a",
    storageBucket: "next-twitter-2e76a.appspot.com",
    messagingSenderId: "770938353820",
    appId: "1:770938353820:web:6f47a70ba36f94e34f9559"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }