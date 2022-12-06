import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = function (searchTerm) {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) reject("Not found");
        else resolve(locationMock);
    });
}

export const locationTransform = function (result) {
    const location = camelize(result.results[0]);
    const { geometry: { location: { lat, lng } } } = location;
    return { lat, lng };
}