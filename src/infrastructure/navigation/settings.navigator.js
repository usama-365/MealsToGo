import React from "react";
import {SettingsScreen} from "../../features/settings/screens/settings.screen";
import {FavouritesScreen} from "../../features/settings/screens/favourites.screen";
import {CardStyleInterpolators, createStackNavigator,} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="Settings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen name="Favourites" component={FavouritesScreen}/>
        </SettingsStack.Navigator>
    );
};