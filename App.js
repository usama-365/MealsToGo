import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {RestaurantScreen} from "./src/features/restaurants/screens/restaurant.screen";
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme";

import {Oswald_400Regular, useFonts as useOswald} from "@expo-google-fonts/oswald";
import {Lato_400Regular, useFonts as useLato} from "@expo-google-fonts/lato";

export default function App() {
    // Loading fonts
    const [oswaldLoaded] = useOswald({Oswald_400Regular});
    const [latoLoaded] = useLato({Lato_400Regular});
    // Validating fonts
    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantScreen/>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}


