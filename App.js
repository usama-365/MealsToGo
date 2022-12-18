import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme";
import {Oswald_400Regular, useFonts as useOswald} from "@expo-google-fonts/oswald";
import {Lato_400Regular, useFonts as useLato} from "@expo-google-fonts/lato";
import {RestaurantsContextProvider} from "./src/services/restaurants/mock/restaurants.context";
import {LocationContextProvider} from "./src/services/location/location.context";
import {Navigation} from "./src/infrastructure/navigation";
import {FavouritesContextProvider} from "./src/services/favourites/favourites.context";

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {AuthenticationContextProvider} from "./src/services/authentication/authentication.context";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEspBL1oXvgkwSOTDrG667dCp9pTVqzkU",
    authDomain: "mealstogo-bfeda.firebaseapp.com",
    projectId: "mealstogo-bfeda",
    storageBucket: "mealstogo-bfeda.appspot.com",
    messagingSenderId: "784705465293",
    appId: "1:784705465293:web:ba02a83e4fcec46953b284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
    // Loading fonts
    const [oswaldLoaded] = useOswald({Oswald_400Regular});
    const [latoLoaded] = useLato({Lato_400Regular});
    // Validating fonts
    if (!oswaldLoaded || !latoLoaded)
        return null;
    else return (
        <AuthenticationContextProvider>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation/>
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
        </AuthenticationContextProvider>
    );
}
