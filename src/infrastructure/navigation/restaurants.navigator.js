import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = function () {
    return (
        <RestaurantStack.Navigator screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerShown: false }}>
            <RestaurantStack.Screen name="RestaurantsList" component={RestaurantScreen} />
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        </RestaurantStack.Navigator>
    );
};