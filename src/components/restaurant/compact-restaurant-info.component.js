import React from "react";
import { Image, Platform, View } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components";
import { Text } from "../typography/text.component";

const CompactImage = styled(Image)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
    `;

const CompactWebImage = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled(View)`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = function ({ restaurant, isMap = false }) {
    const ImageToRender = isAndroid && isMap ? CompactWebImage : CompactImage;
    return (
        <Item>
            <ImageToRender source={{ uri: restaurant.photos[0] }} />
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}