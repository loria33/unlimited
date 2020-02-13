import * as ActionTypes from '../configs/Types/homepageTypes';
import homepageProvider from '../providers/homepageProvider'

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
        return (dispatch, state) => {
             homepageProvider.callUnlimitedApi(road,city).then((results) => {
                if(results) {
                    dispatch(getAddressSuccess(results));
                }
                else { 
                    dispatch(getAddressFail(false));
                }
                
            })
            
            
        }
}
function getAddressSuccess(result) {
    return {
        type: ActionTypes.GET_ADDRESSES_SUCCESS,
        payload: result
    }
}
function getAddressFail(flag) {
    return {
        type: ActionTypes.GET_ADDRESSES_FAIL,
        payload: flag
    }
}
export function getCms(whatToGet) {
    return (dispatch, state) => {
         homepageProvider.getCms().then((results) => {
           
            if(results) {
                dispatch(getCmsSuccess(results));
            }
            else { 
                dispatch(getCmsFail(false));
            }  
        })
    }
}
function getCmsSuccess(result) {
    return {
        type: ActionTypes.GET_CMS_SUCCESS,
        payload: result
    }
}
function getCmsFail(flag) {
    return {
        type: ActionTypes.GET_CMS_FAIL,
        payload: flag
    }
}