import React from "react";
import {View} from "react-native";
import styled, {useTheme} from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3
};

const positionVariant = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginRight"
};

const getStyleString = function (position, size, theme) {
    const propertyName = positionVariant[position];
    const propertyValue = theme.space[sizeVariant[size]];
    return `${propertyName}:${propertyValue};`;
};

const SpacerView = styled(View)`
  ${({variant}) => variant};
`;

export const Spacer = function ({position, size, children}) {
    const theme = useTheme();
    const variant = getStyleString(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
    size: "small",
    position: "top"
};
