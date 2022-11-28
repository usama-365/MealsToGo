import {FlatList, Platform, SafeAreaView, StatusBar, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import styled, {useTheme} from "styled-components/native";

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

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

export const RestaurantScreen = function () {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar></Searchbar>
            </SearchContainer>
            <RestaurantList
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
                renderItem={() => <RestaurantInfoCard></RestaurantInfoCard>}
                keyExtractor={item => item.name}
            />
        </SafeArea>
    );
}