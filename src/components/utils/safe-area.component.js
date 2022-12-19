import { Platform, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
`;