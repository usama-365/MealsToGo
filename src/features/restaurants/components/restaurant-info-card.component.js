import {Text, View} from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from "react-native-svg";
import star from "../../../../assets/star";


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

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};

`;

// Component
export const RestaurantInfoCard = function ({restaurant = {}}) {
    const {
        name = "Some Restaurant", icon, photos = [
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ], address = "100 some random street", isOpenNow = true, rating = 4, isClosedTemporarily
    } = restaurant;
    const ratingArray = Array(Math.round(rating)).fill(0);
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCover key={name} source={{uri: photos[0]}}></RestaurantCover>
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {ratingArray.map(_ => <SvgXml width={20} height={20} xml={star}/>)}
                </Rating>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

