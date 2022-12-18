import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";

const Stack = createStackNavigator();

export const AccountNavigator = function () {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Main" component={() => (<Text>Account Screen</Text>)}/>
                <Stack.Screen name="Login" component={() => (<Text>Login Screen</Text>)}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}