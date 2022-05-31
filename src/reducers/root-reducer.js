import { combineReducers } from 'redux';
import userReducer from '../reducers/users';
const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
