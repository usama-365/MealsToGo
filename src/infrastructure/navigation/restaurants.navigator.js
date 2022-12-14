import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = function () {
    return (
        <RestaurantStack.Navigator headerMode="none">
            <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
        </RestaurantStack.Navigator>
    );
};