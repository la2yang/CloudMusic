// 正在播放的歌曲
import { defineStore } from 'pinia'
import { getSongInfo, getMP3 } from '@/api/song'

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
    async setPlayerMusic(songsInfo) {
      const MP3: any = await getMP3(songsInfo.id)
      const info: any = await getSongInfo(songsInfo.id)
      this.id = songsInfo.id
      this.name = songsInfo.name
      this.url = MP3.data[0].url
      this.pic = songsInfo.pic
      this.singer = songsInfo.singer
      this.isLiked = true
      this.isPlaying = true
      this.currentTime = 0
      // 小数使进度条显示出错
      this.dt = Math.floor(info.songs[0].dt / 1000)
    },
  },
  getters: {},
})

export default usePlayerStore
