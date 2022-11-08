import {Text} from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";

// Styled components
const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

const Title = styled(Text)`
  padding: 16px;
`;

// Component
export const RestaurantInfoCard = function ({restaurant = {}}) {
    const {
        name = "Some Restaurant", icon, photos = [
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ], address = "100 some random street", isOpenNow = true, rating = 4, isClosedTemporarily
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCover key={name} source={{uri: photos[0]}}></RestaurantCover>
            <Title>{name}</Title>
        </RestaurantCard>
    );
};

