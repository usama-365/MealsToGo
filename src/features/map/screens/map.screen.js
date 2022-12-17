import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = function () {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;
    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <>
            <Search />
            <Map region={{ latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.02 }}>
                {restaurants.map((restaurant) => <MapView.Marker key={restaurant.name} title={restaurant.name} coordinate={{ longitude: restaurant.geometry.location.lng, latitude: restaurant.geometry.location.lat }}></MapView.Marker>)}
            </Map>
        </>
    );
}