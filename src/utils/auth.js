import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token' //默认token值  接口调用之后 会变为接口的token

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
