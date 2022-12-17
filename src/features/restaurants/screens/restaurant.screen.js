import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";

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

export const RestaurantScreen = function ({ navigation }) {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            <Search />
            {isLoading ? (
                <CenteredView>
                    <ActivityIndicator style={{ marginLeft: -25 }} color={Colors.blue300} size={50} animating={true} />
                </CenteredView>
            ) : (
                <RestaurantList
                    data={restaurants}
                    renderItem={(item) => (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
                            <RestaurantInfoCard restaurant={item.item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.address}
                />
            )}
        </SafeArea>
    );
}