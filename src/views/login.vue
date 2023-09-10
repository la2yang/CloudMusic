<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/images/avatar.png" />
    </div>
    <h1 class="title">登录网易云账号</h1>
    <div class="qrcode" @click="getQrCode()">
      <img :src="loginData.qrCodeSvg" />
    </div>
    <p>打开网易云音乐app扫码登录</p>
  </div>
</template>

<script setup lang="ts">
import QRCode from 'qrcode'

import { loginQrCodeKey, loginQrCodeCheck } from '@/api/login'
import { onMounted, reactive } from 'vue'

const loginData = reactive({
  qrCodeKey: '',
  qrCodeSvg: '',
  qrCodeInformation: '',
  qrCodeCheckInterval: null,
})

// onMounted(() => {
//   getQrCode()
// })

const getQrCode = () => {
  console.log(loginData)

  return loginQrCodeKey().then((result: any) => {
    if (result.code === 200) {
      loginData.qrCodeKey = result.data.unikey
      console.log(loginData)

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
          console.log(loginData)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  })
}

const checkQrCodeLogin = () => {
  // 清除二维码检测
  clearInterval(loginData.qrCodeCheckInterval)
  loginData.qrCodeCheckInterval = setInterval(() => {
    if (loginData.qrCodeKey === '') return
    loginQrCodeCheck(loginData.qrCodeKey).then((result: any) => {
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
        result.code = 200
        result.cookie = result.cookie.replaceAll(' HTTPOnly', '')
      }
    })
  }, 1000)
}
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
