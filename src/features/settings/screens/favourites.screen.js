import React, {useContext} from "react";
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import styled from "styled-components";
import {SafeArea} from "../../../components/utils/safe-area.component";
import {RestaurantList} from "../../restaurants/components/restaurant-list.styles";
import {Text, TouchableOpacity} from "react-native";
import {RestaurantInfoCard} from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = function ({navigation}) {
    const {favourites} = useContext(FavouritesContext);
    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={(item) => (
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                        <RestaurantInfoCard restaurant={item.item}/>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.address}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text>No favourites yet</Text>
        </NoFavouritesArea>
    );
}