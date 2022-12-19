import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEspBL1oXvgkwSOTDrG667dCp9pTVqzkU",
    authDomain: "mealstogo-bfeda.firebaseapp.com",
    projectId: "mealstogo-bfeda",
    storageBucket: "mealstogo-bfeda.appspot.com",
    messagingSenderId: "784705465293",
    appId: "1:784705465293:web:ba02a83e4fcec46953b284"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const loginRequest = function (email, password) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = function (email, password) {
    const auth = getAuth(app);
    return createUserWithEmailAndPassword(auth, email, password);
}

export const logoutRequest = function () {
    const auth = getAuth(app);
    return signOut(auth);
}