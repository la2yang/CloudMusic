// 创建用户相关的小仓库
import { defineStore } from 'pinia'
import { User } from './type'

const cookie = localStorage.getItem('cookie')

const useUserStore = defineStore('User', {
  // 小仓库存储数据地方
  state: () => {
    return {
      user: {} as User,
      islogin: false,
    }
  },
  actions: {
    async setUserInfo(user) {
      this.user = user
      this.islogin = true
    },

    async LoggedOut() {
      this.user = {}
      this.islogin = false
      localStorage.removeItem('cookie')
      localStorage.removeItem('user')
    },
  },
  getters: {},
})

export default useUserStore
