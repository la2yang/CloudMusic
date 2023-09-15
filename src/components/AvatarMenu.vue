<template>
  <div ref="contextMenu" class="context-menu">
    <div v-if="showMenu" ref="menu" class="menu" tabindex="-1" @blur="blurMenu">
      <hr />
      <div class="item" @click="getUseInfo()">
        <SvgIcon name="settings" />
        <p>设置</p>
      </div>
      <div v-if="!userStore.islogin" class="item" @click="toLogin">
        <SvgIcon name="login" />
        <a>登录</a>
      </div>
      <div v-show="userStore.islogin" class="item" @click="logout()">
        <SvgIcon name="logout" />
        <a>登出</a>
      </div>
      <hr />
      <div class="item">
        <SvgIcon name="github" />
        <p>github</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import useUserStore from '@/store/user'

import SvgIcon from './SvgIcon.vue'
import Router from '@/router'

const menu = ref()
const showMenu = ref(true)
const userStore = useUserStore()

const blurMenu = () => {
  showMenu.value = true
}

const openMenu = () => {
  showMenu.value = !showMenu.value
  nextTick(() => {
    if (menu.value) {
      menu.value.focus()
    }
  })
}

const toLogin = () => {
  Router.push('/login')
}

const logout = () => {
  userStore.LoggedOut()
}

const getUseInfo = () => {
  console.log(userStore.$state)
}

defineExpose({
  openMenu,
})
</script>

<style lang="scss" scoped>
.context-menu {
  position: absolute;
  top: 40px;
  left: -40px;
  user-select: none;
  opacity: 1;
  backdrop-filter: blur(0px);
}

.menu {
  position: fixed;
  min-width: 136px;
  max-width: 240px;
  list-style: none;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 6px;
  z-index: 1;
  -webkit-app-region: no-drag;
  transition:
    background 125ms ease-out,
    opacity 125ms ease-out,
    transform 125ms ease-out;

  &:focus {
    outline: none;
  }
}

.menu .item {
  font-weight: 600;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: default;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }
  svg {
    height: 16px;
    width: 16px;
    margin-right: 5px;
  }

  &:hover {
    color: $active-color;
    background: $block-hover;
    a {
      color: $active-color;
    }
    transition:
      opacity 125ms ease-out,
      transform 125ms ease-out;
  }
  &:active {
    opacity: 0.75;
    transform: scale(0.95);
  }
}

hr {
  margin: 4px 10px;
  background: rgba(128, 128, 128, 0.18);
  height: 1px;
  box-shadow: none;
  border: none;
}
</style>
