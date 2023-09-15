// 是否登录
export function isLoggedIn() {
  return localStorage.getItem('cookie') !== undefined
}
