import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Text } from "react-native";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = function () {
    return (
        <RestaurantStack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
            <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
            <RestaurantStack.Screen name="RestaurantDetail" component={() => <Text>Hello</Text>} />
        </RestaurantStack.Navigator>
    );
};