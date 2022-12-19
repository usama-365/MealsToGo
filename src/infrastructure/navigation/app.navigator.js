import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RestaurantNavigator} from "./restaurants.navigator";
import {MapScreen} from "../../features/map/screens/map.screen";
import {SettingsScreen} from "../../features/settings/screens/settings.screen";
import {FavouritesContextProvider} from "../../services/favourites/favourites.context";
import {LocationContextProvider} from "../../services/location/location.context";
import {RestaurantsContextProvider} from "../../services/restaurants/mock/restaurants.context";
import {SettingsNavigator} from "./settings.navigator";


const Tab = createBottomTabNavigator();

const icons = {
    "Restaurants": "md-restaurant",
    "Setting": "md-settings",
    "Map": "md-map"
};



const screenOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => (<Ionicons name={icons[route.name]} size={size} color={color}/>),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false
});

export const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={screenOptions}>
                        <Tab.Screen name="Restaurants" component={RestaurantNavigator}/>
                        <Tab.Screen name="Map" component={MapScreen}/>
                        <Tab.Screen name="Setting" component={SettingsNavigator}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
);