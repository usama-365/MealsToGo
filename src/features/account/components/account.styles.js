import styled from "styled-components";
import {ImageBackground, View} from "react-native";

export const AccountBackground = styled(ImageBackground).attrs({
    source: require('../../../../assets/home-bg.jpg')
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;