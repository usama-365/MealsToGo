import {FlatList, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

export const RestaurantScreen = function () {
    return (
        <>
            <SearchContainer>
                <Searchbar></Searchbar>
            </SearchContainer>
            <RestaurantList
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
                renderItem={() => <RestaurantInfoCard></RestaurantInfoCard>}
                keyExtractor={item => item.name}
            />
        </>
    );
}