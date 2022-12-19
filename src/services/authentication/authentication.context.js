import React, {createContext, useState} from "react";
import {loginRequest} from "./authentication.service";

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
    return (
        <AuthenticationContext.Provider value={{isAuthenticated: !!user, user, isLoading, error, onLogin}}>
            {children}
        </AuthenticationContext.Provider>
    );
}