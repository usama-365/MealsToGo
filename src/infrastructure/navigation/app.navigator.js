import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RestaurantNavigator} from "./restaurants.navigator";
import {MapScreen} from "../../features/map/screens/map.screen";
import {useContext} from "react";
import {AuthenticationContext} from "../../services/authentication/authentication.context";
import {Button} from "react-native-paper";
import {SafeArea} from "../../components/utils/safe-area.component";

const Tab = createBottomTabNavigator();

const icons = {
    "Restaurants": "md-restaurant",
    "Setting": "md-settings",
    "Map": "md-map"
};

const Setting = () => {
    const {onLogout} = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <Button onPress={onLogout}>Logout</Button>
        </SafeArea>
    )
};

const screenOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => (<Ionicons name={icons[route.name]} size={size} color={color}/>),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false
});

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Setting" component={Setting}/>
        </Tab.Navigator>
    </NavigationContainer>
);