<template>
  <!-- 二维码登录界面 -->
  <div class="login">
    <div class="logo">
      <img src="@/assets/images/avatar.png" />
    </div>
    <h1 class="title">登录网易云账号</h1>
    <div class="qrcode" @click="getQrCode()">
      <img :src="loginData.qrCodeSvg" />
    </div>
    <button @click="setUserInfo()">刷新二维码</button>
    <p>{{ loginData.qrCodeInformation }}</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import Router from '@/router'
import QRCode from 'qrcode'
import {
  loginQrCodeKey,
  loginQrCodeCheck,
  getLoginStatus,
  getUserDetail,
} from '@/api/user'
import useUserStore from '@/store/user'

const userStore = useUserStore()

// 登录验证状态
const loginData = reactive({
  qrCodeKey: '',
  qrCodeSvg: '',
  qrCodeInformation: '请扫码',
  qrCodeCheckInterval: null,
})

onMounted(() => {
  getQrCode()
  checkQrCodeLogin()
})

// 获取二维码key并转化图像
const getQrCode = async () => {
  const result: any = await loginQrCodeKey()
  if (result.code === 200) {
    loginData.qrCodeKey = result.data.unikey
    QRCode.toString(
      `https://music.163.com/login?codekey=${loginData.qrCodeKey}`,
      {
        width: 192,
        margin: 0,
        color: {
          dark: '#33a970',
          light: '#00000000',
        },
        type: 'svg',
      },
    )
      .then((svg) => {
        loginData.qrCodeSvg = `data:image/svg+xml;utf8,${encodeURIComponent(
          svg,
        )}`
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

// 二维码状态检测
const checkQrCodeLogin = async () => {
  clearInterval(loginData.qrCodeCheckInterval)
  loginData.qrCodeCheckInterval = setInterval(async () => {
    if (loginData.qrCodeKey === '') return
    const result: any = await loginQrCodeCheck(loginData.qrCodeKey)
    if (result.code === 800) {
      getQrCode() // 重新生成QrCode
      loginData.qrCodeInformation = '二维码已失效，请重新扫码'
    } else if (result.code === 802) {
      loginData.qrCodeInformation = '扫描成功，请在手机上确认登录'
    } else if (result.code === 801) {
      loginData.qrCodeInformation = '打开网易云音乐APP扫码登录'
    } else if (result.code === 803) {
      clearInterval(loginData.qrCodeCheckInterval)
      loginData.qrCodeInformation = '登录成功，请稍等...'
      localStorage.setItem('cookie', result.cookie)
      setUserInfo()
      Router.push('/library')
    }
  }, 1000)
}

// 本地存储cookie
const setUserInfo = async () => {
  const result = await getLoginStatus()
  localStorage.setItem('user', JSON.stringify(result.data.profile))
  userStore.setUserInfo(result.data.profile)
}
// 清除校验二维码定时器
onBeforeUnmount(() => {
  clearInterval(loginData.qrCodeCheckInterval)
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin-top: 20px;
  img {
    height: 50px;
    border-radius: 15px;
  }
}

.title {
  margin: 30px 0;
  font-size: 24px;
  font-weight: 600;
}

.qrcode {
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: $block-hover;
}
</style>
@/api/user
