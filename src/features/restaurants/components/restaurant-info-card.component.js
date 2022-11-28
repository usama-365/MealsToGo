import {SvgXml} from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";
import {
    Address,
    Icon,
    Info,
    Rating,
    RestaurantCard,
    RestaurantCover,
    Section,
    SectionEnd
} from "./restaurant-info-card.styles";


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
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map(_ => <SvgXml width={20} height={20} xml={star}/>)}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
                        <Spacer position="left" size="large"></Spacer>
                        {isOpenNow && <SvgXml width={20} height={20} xml={open}></SvgXml>}
                        <Spacer position="left" size="large"></Spacer>
                        <Icon source={{uri: icon}}></Icon>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

