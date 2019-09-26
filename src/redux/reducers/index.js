import { combineReducers } from 'redux';
import user from './user';
import chatuser from './chatuser';

const appReducer = combineReducers({
  user,
  chatuser
})

export default appReducer;