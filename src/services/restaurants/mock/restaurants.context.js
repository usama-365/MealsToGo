import {createContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = function ({children}) {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then(result => {
                    setRestaurants(result);
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => setIsLoading(false));
        }, 2000)
    }, []);

    return (
        <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
            {children}
        </RestaurantsContext.Provider>
    );
};