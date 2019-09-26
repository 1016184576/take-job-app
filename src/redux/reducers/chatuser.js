import { GET_USER_LIST } from '../action/actionTypes';
let initState = {
  userList:[],
}

const chatUserReducer = (state = initState, action)=>{
  switch(action.type){
    case GET_USER_LIST:
      return {
        ...state,
        userList: action.payload
      }
    default:
      return state;
  }
}

export default chatUserReducer;