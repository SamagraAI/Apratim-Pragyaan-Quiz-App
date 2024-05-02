import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
//import {firebaseConfig} from "../sdk_config"

const firebaseConfig = {
    apiKey: "AIzaSyDxbpLYvu6n6Z3wBiHxTIY1imrg2GShC0g",
    authDomain: "auth-593cd.firebaseapp.com",
    databaseURL: "https://auth-593cd-default-rtdb.firebaseio.com",
    projectId: "auth-593cd",
    storageBucket: "auth-593cd.appspot.com",
    messagingSenderId: "158679603844",
    appId: "1:158679603844:web:4515c93dd985d0fefdc0d1",
    measurementId: "G-QD9YS96N1E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const db = getFirestore()


export { app, auth };
