// 用户喜欢的音乐
import { defineStore } from 'pinia'
import { getMP3 } from '@/api/song'

export type songType = {
  id: number
  name: string
  pic: string
  singer: string
  url: string
  dt: number
  // 专辑
  list: string
}

// 定义 state 的类型
interface LikedState {
  songs: songType[]
  playlists: any[] // 替换为实际的歌单类型
}

const useLikedStore = defineStore('liked', {
  state: (): LikedState => {
    return {
      // 当前用户喜欢的音乐id
      songs: [],
      // 当前用户收藏的歌单
      playlists: [],
    }
  },
  actions: {
    async setLikedSongs(likedSons) {
      const songs = []
      likedSons.forEach(async (item) => {
        const MP3: any = await getMP3(item.id)
        let song: songType = {
          id: item.id,
          name: item.name,
          pic: item.al.picUrl,
          singer: item.ar[0].name,
          url: MP3.data[0].url,
          dt: Math.floor(item.dt / 1000),
          list: item.al.name,
        }
        songs.push(song)
      })
      this.songs = songs
    },

    async setLikedPlaylists(playlists) {
      this.playlists = playlists
    },
  },
  getters: {},
})

export default useLikedStore
