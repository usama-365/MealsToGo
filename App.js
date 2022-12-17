import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

export default function App() {
    // Loading fonts
    const [oswaldLoaded] = useOswald({ Oswald_400Regular });
    const [latoLoaded] = useLato({ Lato_400Regular });
    // Validating fonts
    if (!oswaldLoaded || !latoLoaded)
        return null;
    else return (
        <ThemeProvider theme={theme}>
            <FavouritesContextProvider>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <Navigation />
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </FavouritesContextProvider>
        </ThemeProvider>
    );
}
