import * as ActionTypes from '../configs/Types/homepageTypes';

const initialState = {
    cityText:'',
    roadText:'',
    zipText:'',
    openDrawerflag:false,
}

export default function(state=initialState,action){
    switch(action.type){
        
        case ActionTypes.GET_CITY_INPUT:
            return {
                ...state, cityText: action.payload
        }
        case ActionTypes.GET_ROAD_INPUT:
            return {
                ...state, roadText: action.payload
        }
        case ActionTypes.OPEN_DRAWER:
            return {
                ...state, openDrawerflag: action.payload 
        }
        default:
            return state;
    }
}