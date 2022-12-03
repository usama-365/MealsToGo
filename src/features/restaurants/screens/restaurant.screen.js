import React, {useContext} from "react";
import {FlatList, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import {RestaurantsContext} from "../../../services/restaurants/mock/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

export const RestaurantScreen = function () {
    const restaurantsContext = useContext(RestaurantsContext);
    return (
        <>
            <SearchContainer>
                <Searchbar></Searchbar>
            </SearchContainer>
            <RestaurantList
                data={restaurantsContext.restaurants}
                renderItem={() => <RestaurantInfoCard></RestaurantInfoCard>}
                keyExtractor={item => item.name}
            />
        </>
    );
}