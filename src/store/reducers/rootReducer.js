import { combineReducers } from 'redux';
import userReducer from './userReducer';
import CVReducer from './CVReducer';

const rootReducer = combineReducers({
    user: userReducer,
    CV: CVReducer,
});

export default rootReducer;