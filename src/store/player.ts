// 正在播放的歌曲
import { defineStore } from 'pinia'

// 当前播放的歌曲
const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      id: null,
      name: '',
      url: '',
      pic: '',
      singer: '',
      // 是否喜爱
      isLiked: true,
      // 是否正在播放
      isPlaying: false,
      // 当前播放进度
      currentTime: 0,
      // 歌曲时长
      dt: 0,
    }
  },
  actions: {
    async setPlayerMusic(songInfo) {
      this.id = songInfo.id
      this.name = songInfo.name
      this.url = songInfo.url
      this.pic = songInfo.pic
      this.singer = songInfo.singer
      this.isLiked = true
      this.isPlaying = true
      this.currentTime = 0
      // 小数使进度条显示出错
      this.dt = songInfo.dt
    },
  },
  getters: {},
})

export default usePlayerStore
