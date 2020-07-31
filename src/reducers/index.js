import {combineReducers} from 'redux';
import handleClick from './handleClick'
import AuthReducer from './AuthReducer';


export default combineReducers({
    auth : AuthReducer,
})
 