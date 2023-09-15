//统一管理咱们项目用户相关的接口

import request from '@/utils/request'

//项目用户相关的请求地址

enum API {
  SEARCH_URL = '/search/default',
}
//登录接口
export const reqSearch = () => request.get('/search/default')
