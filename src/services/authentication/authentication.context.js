import React, {createContext, useState} from "react";
import {loginRequest, registerRequest} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = function ({children}) {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
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

    return (
        <AuthenticationContext.Provider value={{isAuthenticated: !!user, user, isLoading, error, onLogin, onRegister}}>
            {children}
        </AuthenticationContext.Provider>
    );
}