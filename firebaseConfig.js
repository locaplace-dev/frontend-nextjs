// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCva0goYCKGmBzQoRswiqjMw0ejRzqjrvs',
  authDomain: 'locaplace-21da6.firebaseapp.com',
  projectId: 'locaplace-21da6',
  storageBucket: 'locaplace-21da6.appspot.com',
  messagingSenderId: '731647472569',
  appId: '1:731647472569:web:245a2bc213e8bf21fb3c68',
  measurementId: 'G-SG6GFMSNLS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
