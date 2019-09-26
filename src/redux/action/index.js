import { ERROR_MSG, USER_REGISTER, USER_LOGIN, UPDATE_INFO, GET_USER_LIST, LOGIN_OUT } from './actionTypes';
import { reqRegister, reqLogin, reqUpdateInfo, reqGetUserList } from '../../api/user';

export const userRegisterAction = userInfo => ({ type: USER_REGISTER, payload: userInfo })

export const userLoginAction = userInfo => ({ type: USER_LOGIN, payload: userInfo })

export const updateInfoAction = userInfo => ({ type: UPDATE_INFO, payload: userInfo })

export const userGetUserListAction = data => ({ type: GET_USER_LIST, payload: data })

export const errorMsgAction = msg => ({ type: ERROR_MSG, errMsg: msg })


//用户注册
export const register = userInfo => {
  return dispatch => {
    return new Promise(async (resolve,reject) => {
      const response = await reqRegister(userInfo);
      if(response.code === 0){
        dispatch(userRegisterAction(response.data))
        resolve(response.data)
      }else{
        reject(response.msg);
      }
    })
  }
}

//用户登陆
export const login = ({userName, pwd}) => {
  return dispatch => {
    return new Promise(async (resolve,reject) => {
      const response = await reqLogin({ userName, pwd });
      if(response.code === 0){
        dispatch(userLoginAction(response.data))
        resolve(response.data)
      }else{
        reject(response.msg);
      }
    }) 
  }
}

//修改用户信息
export const updateInfo = userInfo => {
  return dispatch => {
    return new Promise(async (resolve,reject) => {
      const response = await reqUpdateInfo(userInfo);
      if(response.code === 0){
        dispatch(updateInfoAction(response.data))
        resolve(response.data)
      }else{
        reject(response.msg);
      }
    })
  }
}

//获取用户列表
export const getUserList = type => {
  return dispatch => {
    return new Promise(async (resolve,reject) => {
      const response = await reqGetUserList({ type });
      if(response.code === 0){
        dispatch(userGetUserListAction(response.data))
        resolve(response.data)
      }else{
        reject(response.msg);
      }
    })
  }
}

//退出登陆
export const loginOut = () => {
  return dispatch => {
    dispatch({ type: LOGIN_OUT })
  }
}