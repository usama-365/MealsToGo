import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {AccountScreen} from "../../features/account/screens/account.screen";
import {RegisterScreen} from "../../features/account/screens/register.screen";
import {LoginScreen} from "../../features/account/screens/login.screen";

const Stack = createStackNavigator();

export const AccountNavigator = function () {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}>
                <Stack.Screen name="Main" component={AccountScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}