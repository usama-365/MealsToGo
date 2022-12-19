import React, {useContext, useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {ActivityIndicator, Colors} from "react-native-paper";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import {RestaurantsContext} from "../../../services/restaurants/mock/restaurants.context";
import {Search} from "../components/search.component";
import {SafeArea} from "../../../components/utils/safe-area.component";
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";
import {RestaurantList} from "../components/restaurant-list.styles";
import {FadeInView} from "../../../components/animations/fade.animation";


const CenteredView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = function ({navigation}) {
    const {restaurants, isLoading} = useContext(RestaurantsContext);
    const {favourites} = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);
    return (
        <SafeArea>
            <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)}/>
            {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}
            {isLoading ? (
                <CenteredView>
                    <ActivityIndicator style={{marginLeft: -25}} color={Colors.blue300} size={50} animating={true}/>
                </CenteredView>
            ) : (

                    <RestaurantList
                        data={restaurants}
                        renderItem={(item) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                                <FadeInView><RestaurantInfoCard restaurant={item.item}/></FadeInView>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.address}
                    />

            )}
        </SafeArea>
    );
}