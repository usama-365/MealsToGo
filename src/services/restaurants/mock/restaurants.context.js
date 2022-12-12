import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "../../location/location.context";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = function ({ children }) {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const locationContext = useContext(LocationContext);
    const { location } = locationContext;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest(`${location?.lat},${location?.lng}`)
                .then(restaurantsTransform)
                .then(result => {
                    setRestaurants(result);
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => setIsLoading(false));
        }, 2000)
    }, [location]);

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    );
};