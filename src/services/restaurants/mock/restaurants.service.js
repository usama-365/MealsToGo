// Default location is san fransisco
import { mockImages, mocks } from "./index";
import camelize from 'camelize';

export const restaurantsRequest = function (location /* = "37.7749295,-122.4194155" */) {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) reject("Not found");
        else resolve(mock);
    })
}

// Transform function
export const restaurantsTransform = function ({ results = [] }) {
    const mappedResults = results.map(restaurant => {
        restaurant.photos = restaurant.photos.map(_ => mockImages[Math.ceil(Math.random() * mockImages.length)]);
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
        };
    });
    return camelize(mappedResults);
};
