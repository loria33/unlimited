import * as ActionTypes from '../configs/Types/_types';

export function incrementNumber(number) {
    return {
        type: ActionTypes.INCREMENT_NUMBER,
        payload: number
    }
}
