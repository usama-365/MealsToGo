import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/services/restaurants/mock/restaurants.context";

const Tab = createBottomTabNavigator();

const Setting = () => <Text>Setting</Text>;
const Map = () => <Text>Map</Text>;

const icons = {
    "Restaurants": "md-restaurant",
    "Setting": "md-settings",
    "Map": "md-map"
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => (<Ionicons name={icons[route.name]} size={size} color={color} />),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
});

export default function App() {
    // Loading fonts
    const [oswaldLoaded] = useOswald({ Oswald_400Regular });
    const [latoLoaded] = useLato({ Lato_400Regular });
    // Validating fonts
    if (!oswaldLoaded || !latoLoaded) {
        return null;
    } else return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator screenOptions={screenOptions}>
                            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                            <Tab.Screen name="Map" component={Map} />
                            <Tab.Screen name="Setting" component={Setting} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </RestaurantsContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}


