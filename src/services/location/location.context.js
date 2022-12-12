import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();



export const LocationContextProvider = function ({ children }) {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = function (keyword) {
        setIsLoading(true);
        setKeyword(keyword);
    };

    useEffect(() => {
        if (!keyword.length) return;
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(setLocation)
            .catch(setError)
            .finally(() => setIsLoading(false));
    }, [keyword]);

    return (
        <LocationContext.Provider value={{ search: onSearch, keyword, location, isLoading, error }}>
            {children}
        </LocationContext.Provider>
    );
}