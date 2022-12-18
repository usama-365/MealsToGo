import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = function (email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
};

