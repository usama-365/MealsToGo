import React from "react";
import { View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled(View)`
    padding: 10px;
`;

export const FavouritesBar = function ({ favourites, onNavigate }) {
    if (favourites.length) return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map(restaurant => {
                    const key = restaurant.name;
                    return (
                        <Spacer position="left" size="medium">
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", { restaurant })}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    ); else return null;
}