import {Platform, SafeAreaView, StatusBar, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const ListView = styled(View)`
  padding: ${props => props.theme.space[3]};
  flex: 1;
`;

export const RestaurantScreen = function () {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar></Searchbar>
            </SearchContainer>
            <ListView>
                <RestaurantInfoCard/>
            </ListView>
        </SafeArea>
    );
}