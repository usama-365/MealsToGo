import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {Searchbar} from "react-native-paper";

const isAndroid = Platform.OS === "android";

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.searchView}>
                    <Searchbar></Searchbar>
                </View>
                <View style={styles.listView}>
                    <Text>List</Text>
                </View>
            </SafeAreaView>
            <ExpoStatusBar style="auto"/>
        </>
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
        backgroundColor: "blue",
        flex: 1
    }
});
