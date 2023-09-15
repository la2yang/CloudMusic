import request from '@/utils/request'

/**
 * 二维码key生成接口
 */
export function loginQrCodeKey() {
  return request({
    url: '/login/qr/key',
    method: 'get',
    params: {
      timestamp: new Date().getTime(),
    },
  })
}

/**
 * 二维码生成接口
 * 说明: 调用此接口传入上一个接口生成的key可生成二维码图片的base64和二维码信息,
 * 可使用base64展示图片,或者使用二维码信息内容自行使用第三方二维码生产库渲染二维码
 * @param {Object} params
 * @param {string} params.key
 * @param {string=} params.qrimg 传入后会额外返回二维码图片base64编码
 */
export function loginQrCodeCreate(params) {
  return request({
    url: '/login/qr/create',
    method: 'get',
    params: {
      ...params,
      timestamp: new Date().getTime(),
    },
  })
}

/**
 * 二维码检测扫码状态接口
 * 说明: 轮询此接口可获取二维码扫码状态,800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
 * @param {string} key
 */
export function loginQrCodeCheck(key) {
  return request({
    url: '/login/qr/check',
    method: 'get',
    params: {
      key,
      timestamp: new Date().getTime(),
    },
  })
}

export function getLoginStatus() {
  return request({
    url: '/login/status',
    method: 'post',
    params: {
      timestamp: new Date().getTime(),
    },
  })
}

export function getUserDetail() {
  return request({
    url: '/user/subcount',
    method: 'get',
    params: {
      timestamp: new Date().getTime(),
    },
  })
}

/**
 * 获取用户歌单
 * 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
 * - uid : 用户 id
 * - limit : 返回数量 , 默认为 30
 * - offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Object} params
 * @param {number} params.uid
 * @param {number} params.limit
 * @param {number=} params.offset
 */
export function userPlaylist(uid) {
  return request({
    url: '/user/playlist',
    method: 'get',
    params: {
      uid,
    },
  })
}

/**
 * 喜欢音乐列表（需要登录）
 * 说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组)
 * - uid: 用户 id
 * @param {number} uid
 */
export function userLikedSongsIDs(uid) {
  return request({
    url: '/likelist',
    method: 'get',
    params: {
      uid,
      timestamp: new Date().getTime(),
    },
  })
}
