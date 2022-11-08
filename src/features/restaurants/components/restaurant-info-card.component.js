import {Text} from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";

// Styled components
const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCover = styled(Card.Cover)`
  background-color: white;
  padding: ${props => props.theme.space[3]};
`;

const Title = styled(Text)`
  padding: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
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

