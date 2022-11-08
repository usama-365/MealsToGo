import {StyleSheet, Text} from "react-native";
import {Card} from "react-native-paper";

export const RestaurantInfo = function ({restaurant = {}}) {
    const {
        name = "Some Restaurant", icon, photos = [
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ], address = '100 some random street', isOpenNow = true, rating = 4, isClosedTemporarily
    } = restaurant;

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover style={styles.cover} key={name} source={{uri: photos[0]}}></Card.Cover>
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
    },
    cover: {
        backgroundColor: 'white',
        padding: 20
    },
    title: {
        padding: 16
    }
});