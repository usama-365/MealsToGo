import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();



export const LocationContextProvider = function ({ children }) {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = function (keyword) {
        setKeyword(keyword);
        if (!keyword.length)
            return;
        setIsLoading(true);
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => setLocation(result))
            .catch(error => setError(error))
            .finally(() => { console.log(keyword, location); setIsLoading(false); });
    };

    return (
        <LocationContext.Provider value={{ search: onSearch, keyword, location, isLoading, error }}>
            {children}
        </LocationContext.Provider>
    );
}