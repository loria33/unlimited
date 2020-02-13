import * as ActionTypes from '../configs/Types/homepageTypes';

const initialState = {
    cityText:'',
    roadText:'',
    zipText:'',
    openDrawerflag:false,
    blogCategories:[],
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
        case ActionTypes.GET_CMS_SUCCESS:
            return {
                ...state, blogCategories:action.payload 
            }
        case ActionTypes.GET_CMS_FAIL:
            return {
                ...state, blogCategories:[]
            }
        default:
            return state;
    }
}