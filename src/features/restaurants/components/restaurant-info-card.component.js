import {Text, View} from "react-native";
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
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-size: ${props => props.theme.fontSizes.caption};
  font-family: ${props => props.theme.fonts.body};
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
            <Info>
                <Title>{name}</Title>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

