import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = function ({ children }) {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async function (value) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const loadFavourites = async function () {
        try {
            const value = await AsyncStorage.getItem("@favourites");
            if (value) setFavourites(JSON.parse(value));
        } catch (e) {
            console.log(e);
        }
    }

    const add = (restaurant) => setFavourites([...favourites, restaurant]);
    const remove = (restaurant) => setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));

    useEffect(() => { loadFavourites(); }, []);
    useEffect(() => { saveFavourites(favourites); }, [favourites]);

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
            {children}
        </FavouritesContext.Provider>
    );
}