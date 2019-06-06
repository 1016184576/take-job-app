import { call, put, takeEvery, all } from 'redux-saga/effects'
import { register, login } from '../../api/user';
import { USER_REGISTER, USER_REGISTER_ASYNC, USER_LOGIN, USER_LOGIN_ASYNC } from '../action/actionTypes';
import { Toast } from 'antd-mobile';


//注册异步请求处理
function* asyncRegister(action) {
  try {
    const res = yield call(register, action.userInfo);
    if(res.data)  {
      Toast.success("注册成功！");
      yield put({ type: USER_REGISTER, payload: action.userInfo })
    }else {
      return Toast.fail(res.msg);
    }
  } catch (error) {
    Toast.fail(error.message)
  }
}

//用户登陆异步请求处理
function* asyncLogin(action){
  try {
    const res = yield call(login, action.userInfo);
    console.log(res)
    if(res.data){
      yield put({ type: USER_LOGIN, payload: res.data })
    }else{
      return Toast.fail(res.msg);
    }
  } catch (error) {
    Toast.fail(error.message)
  }
}

//全局监听器，监听从组件发出的action
function* rootSaga() {
  yield takeEvery(USER_REGISTER_ASYNC, asyncRegister)
  yield takeEvery(USER_LOGIN_ASYNC, asyncLogin)
}

export default rootSaga;