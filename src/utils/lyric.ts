// 传入请求的歌词字符串,获取[时间点, 歌词]形式的歌词
const switchLyric = (str) => {
  let array = []
  let time = ''
  let value = ''
  let result = []
  let arr = str.split('\n')
  //去除空行
  arr.forEach((item) => {
    if (item != '') {
      array.push(item)
    }
  })
  arr.forEach((item) => {
    time = item.split(']')[0]
    value = item.split(']')[1]
    //去掉时间里的中括号得到xx:xx.xx
    var t = time.slice(1).split(':')
    //将结果压入最终数组
    result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value])
  })
  return result
}

export default switchLyric
