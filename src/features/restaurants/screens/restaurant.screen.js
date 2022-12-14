import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

const CenteredView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantScreen = function () {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <>
            <Search />
            {isLoading ? (
                <CenteredView>
                    <ActivityIndicator style={{ marginLeft: -25 }} color={Colors.blue300} size={50} animating={true} />
                </CenteredView>
            ) : (
                <RestaurantList data={restaurants} renderItem={(item) => <RestaurantInfoCard restaurant={item} />} keyExtractor={item => item.address} />
            )}
        </>
    );
}