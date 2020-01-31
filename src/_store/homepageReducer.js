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
                ...state, clickedNumber: action.payload + 1 
        }
        case ActionTypes.OPEN_DRAWER:
            return {
                ...state, openDrawerflag: action.payload 
        }
        default:
            return state;
    }
}