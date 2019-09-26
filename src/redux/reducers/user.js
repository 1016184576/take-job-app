import { USER_REGISTER, USER_LOGIN, ERROR_MSG, UPDATE_INFO, LOGIN_OUT } from '../action/actionTypes';
import { $localStorage } from '../../common/storage';
let user = $localStorage.get('user');

let info = user ? user : {
  userName: '',
  userType: 'elite',
}
let initState = {
  ...info,
  errMsg:'',
  isAuth: false,
}

const userReducer = (state = initState, action)=>{
  switch(action.type){
    case USER_REGISTER:
      $localStorage.set('token',action.payload.token)
      $localStorage.set('user', action.payload)
      return {
        ...state,
        ...action.payload
      }
    case USER_LOGIN:
      let { payload } = action;
      $localStorage.set('token',payload.token)
      $localStorage.set('user', payload)
      return {
        ...state,
        ...payload,
        isAuth: payload.token ? true : false,
      }
    case UPDATE_INFO:
        $localStorage.set('user', action.payload)
        return {
          ...state,
          ...action.payload
        }
    case ERROR_MSG:
      return {
        ...state,
        errMsg: action.errMsg
      }
    case LOGIN_OUT:
      return {
        ...initState
      }
    default:
      return state;
  }
}

export default userReducer;