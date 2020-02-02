import * as ActionTypes from '../configs/Types/homepageTypes';

export function openDrawer(openDrawerflag) {
    return {
        type: ActionTypes.OPEN_DRAWER,
        payload: openDrawerflag
    }
}
export function cityInput(cityText) {
    return {
        type: ActionTypes.GET_CITY_INPUT,
        payload: cityText
    }
}
export function roadInput(roadText) {
    return {
        type: ActionTypes.GET_ROAD_INPUT,
        payload: roadText
    }
}
export function zipCode(zipText) {
    return {
        type: ActionTypes.GET_ZIP_CODE,
        payload: zipText
    }
}
export function adrressToCoordinates(road,city) {
    return {
        type: ActionTypes.GET_ZIP_CODE,
        payload: zipText
    }
}
