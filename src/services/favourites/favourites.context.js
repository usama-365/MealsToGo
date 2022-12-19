import React, {createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthenticationContext} from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = function ({children}) {
    const [favourites, setFavourites] = useState([]);
    const {user} = useContext(AuthenticationContext);

    const saveFavourites = async function (value, uid) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const loadFavourites = async function (uid) {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if (value) setFavourites(JSON.parse(value));
            console.log(`@favourites-${uid}`);
        } catch (e) {
            console.log(e);
        }
    }

    const add = (restaurant) => setFavourites([...favourites, restaurant]);
    const remove = (restaurant) => setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));

    useEffect(() => {
        if (user?.uid) loadFavourites(user.uid);
    }, [user]);
    useEffect(() => {
        if (user?.uid) saveFavourites(favourites, user.uid);
    }, [favourites, user]);

    return (
        <FavouritesContext.Provider value={{favourites, addToFavourites: add, removeFromFavourites: remove}}>
            {children}
        </FavouritesContext.Provider>
    );
}