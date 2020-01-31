import { combineReducers } from 'redux';
import number from './number';
import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
    number,homepageReducer
});

export default rootReducer;