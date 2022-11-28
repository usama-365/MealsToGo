import {Image, Text, View} from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {Spacer} from "../../../components/spacer/spacer.component";


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
  justify-content: space-between;
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

// Component
export const RestaurantInfoCard = function ({restaurant = {}}) {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
    } = restaurant;
    const ratingArray = Array(Math.round(rating)).fill(0);
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCover key={name} source={{uri: photos[0]}}></RestaurantCover>
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(_ => <SvgXml width={20} height={20} xml={star}/>)}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && <Text variant="label" style={{color: "red"}}>CLOSED TEMPORARILY</Text>}
                        <Spacer position="left" size='large'></Spacer>
                        {isOpenNow && <SvgXml width={20} height={20} xml={open}></SvgXml>}
                        <Spacer position="left" size='small'></Spacer>
                        <Image style={{width: 15, height: 15}} source={{uri: icon}}></Image>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

