import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";
import { Text } from "../typography/text.component";

const CompactImage = styled(Image)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled(View)`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

export const CompactRestaurantInfo = function ({ restaurant }) {
    return (
        <Item>
            <CompactImage source={{ uri: restaurant.photos[0] }}></CompactImage>
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}