import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, SafeAreaView, StatusBar, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components";
import { RestaurantNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const icons = {
    "Restaurants": "md-restaurant",
    "Setting": "md-settings",
    "Map": "md-map"
};

const Setting = () => (<Text>Setting</Text>);
const Map = () => (<Text>Map</Text>);

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => (<Ionicons name={icons[route.name]} size={size} color={color} />),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false
});

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    </NavigationContainer>
);