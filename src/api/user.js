import { user } from '../config/apiConfig';

import fetch from '../common/ajax';

export const reqRegister = (data) => {
  return fetch({
      url: `${ user.register }`,
      method: 'post',
      data
  })
}

export const reqLogin = (data) => {
  return fetch({
      url: `${ user.login }`,
      method: 'post',
      data
  })
}


export const reqUpdateInfo = (data) => {
  return fetch({
      url: `${ user.updateInfo }`,
      method: 'post',
      data
  })
}
export const reqGetUserList = (params) => {
  return fetch({
      url: `${ user.getUserList }`,
      method: 'get',
      params
  })
}