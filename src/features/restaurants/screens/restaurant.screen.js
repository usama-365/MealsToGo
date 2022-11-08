import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.component";

const isAndroid = Platform.OS === "android";

export const RestaurantScreen = function () {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.searchView}>
                <Searchbar></Searchbar>
            </View>
            <View style={styles.listView}>
                <RestaurantInfo/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: isAndroid ? StatusBar.currentHeight : 0,
        flex: 1
    },
    searchView: {
        padding: 16
    },
    listView: {
        padding: 16,
        flex: 1
    }
});