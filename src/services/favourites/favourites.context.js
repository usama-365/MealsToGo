import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = function ({ children }) {
    const [favourites, setFavourites] = useState([]);
    const add = (restaurant) => setFavourites([...favourites, restaurant]);
    const remove = (restaurant) => setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));
    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
            {children}
        </FavouritesContext.Provider>
    );
}