// 用户喜欢的音乐
import { defineStore } from 'pinia'

export type songType = {
  id: number
  name: string
  pic: string
  singer: string
}

// 定义 state 的类型
interface LikedState {
  songs: songType[]
  playlists: any[] // 替换为实际的歌单类型
}

const uselikedStore = defineStore('liked', {
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
      likedSons.forEach((item) => {
        let song: songType = {
          id: item.id,
          name: item.name,
          pic: item.al.picUrl,
          singer: item.ar[0].name,
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

export default uselikedStore
