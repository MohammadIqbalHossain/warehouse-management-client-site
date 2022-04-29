// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9GrdvAbpuZCUw5WFkxyEMYA2ArEFkjzI",
    authDomain: "warehouse-site.firebaseapp.com",
    projectId: "warehouse-site",
    storageBucket: "warehouse-site.appspot.com",
    messagingSenderId: "621426055061",
    appId: "1:621426055061:web:e593ef187d18fd98cf089c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;