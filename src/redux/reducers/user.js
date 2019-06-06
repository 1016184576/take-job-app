import { USER_REGISTER, USER_LOGIN, ERROR_MSG, UPDATE_INFO } from '../action/actionTypes';
import { $localStorage } from '../../common/storage';
let initState = {
  userName:'',
  userType:'elite',
  errMsg:'',
  isAuth: false,
}

const userReducer = (state = initState, action)=>{
  switch(action.type){
    case USER_REGISTER:
      return {
        ...state,
        ...action.payload
      }
    case USER_LOGIN:
      let { payload } = action;
      $localStorage.set('token',payload.token)
      return {
        ...state,
        ...payload,
        isAuth: payload.token ? true : false,
      }
    case UPDATE_INFO:
        return {
          ...state,
          ...action.payload
        }
    case ERROR_MSG:
      return {
        ...state,
        errMsg: action.errMsg
      }
    default:
      return state;
  }
}

export default userReducer;