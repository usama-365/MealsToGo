import React, {createContext, useState} from "react";
import {app, loginRequest, logoutRequest, registerRequest} from "./authentication.service";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = function ({children}) {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    onAuthStateChanged(getAuth(app), (u) => {
        if (u) setUser(u);
        setIsLoading(false);
    })

    const onLogin = function (email, password) {
        setIsLoading(true);
        loginRequest(email, password)
            .then(setUser)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const onRegister = function (email, password, repeatedPassword) {
        if (password !== repeatedPassword) {
            setError({message: "Passwords do not match"});
        } else {
            setIsLoading(true);
            registerRequest(email, password)
                .then(setUser)
                .catch(setError)
                .finally(() => setIsLoading(false));
        }
    };

    const onLogout = function () {
        setIsLoading(true);
        logoutRequest()
            .then(() => setUser(null))
            .catch(setError)
            .finally(() => setIsLoading(false));
    }

    return (
        <AuthenticationContext.Provider value={{isAuthenticated: !!user, user, isLoading, error, onLogin, onRegister, onLogout}}>
            {children}
        </AuthenticationContext.Provider>
    );
}