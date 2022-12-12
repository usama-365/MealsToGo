import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();



export const LocationContextProvider = function ({ children }) {
    const [keyword, setKeyword] = useState("san francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = function (keyword = "Antwerp") {
        setIsLoading(true);
        setKeyword(keyword);
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => setLocation(result))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    };
    // On load, load the location and change states appropriately
    useEffect(() => { onSearch(keyword) }, []);

    return (
        <LocationContext.Provider value={{ keyword, location, isLoading, error }}>
            {children}
        </LocationContext.Provider>
    );
}