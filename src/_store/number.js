import * as ActionTypes from '../configs/Types/_types';
 
export default function(state={},action){
    switch(action.type){
        case ActionTypes.INCREMENT_NUMBER:
            return {...state, clickedNumber: action.payload + 1 }
        default:
            return state;
    }
}