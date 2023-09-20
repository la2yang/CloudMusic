<template>
  <div class="Navbar">
    <div class="navigation-arrow">
      <ButtonIcon>
        <SvgIcon :style="{ width: 24, height: 24 }" name="arrow-left"></SvgIcon>
      </ButtonIcon>
      <ButtonIcon>
        <SvgIcon
          :style="{ width: 24, height: 24 }"
          name="arrow-right"
        ></SvgIcon>
      </ButtonIcon>
    </div>
    <div class="navigation">
      <router-link to="/home">
        <ButtonIcon class="home">首页</ButtonIcon>
      </router-link>
      <router-link to="/explore">
        <ButtonIcon class="explore">发现</ButtonIcon>
      </router-link>

      <router-link to="/library">
        <ButtonIcon class="library">音乐库</ButtonIcon>
      </router-link>
    </div>
    <div class="right-content">
      <div class="search-box" :class="{ active: isFocused }">
        <SvgIcon class="search-icon" name="search"></SvgIcon>
        <input
          ref="searchInput"
          type="search"
          :placeholder="isFocused ? '' : '搜索'"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
      </div>
      <div class="avatar">
        <img class="avatar-img" :src="avatar()" @click="showAvatarMenu()" />
        <AvatarMenu ref="avatarMenu"></AvatarMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SvgIcon from './SvgIcon.vue'
import AvatarMenu from './AvatarMenu.vue'

import useUserStore from '@/store/user'
const userStore = useUserStore()
// 搜索框聚焦
let isFocused = ref(false)

// 触发子组件中的方法
const avatarMenu = ref()
const showAvatarMenu = () => {
  avatarMenu.value.openMenu()
}

const avatar = () => {
  return (
    userStore.user.avatarUrl ||
    'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60'
  )
}
</script>

<style scoped lang="scss">
.Navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #fff;
  opacity: 0.9;
  backdrop-filter: blur(20px);
  z-index: 100;
  padding: {
    right: 10vw;
    left: 10vw;
  }
}
@media (max-width: 1336px) {
  .Navbar {
    padding: 0 5vw;
  }
}

.navigation-arrow {
  flex: 1;
  display: flex;
  align-items: left;
  svg {
    width: 24px;
    height: 24px;
  }
}

.navigation {
  display: flex;
  flex: 1;
  justify-content: center;
  text-transform: uppercase;
  user-select: none;
  a {
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
    color: black;
  }
}

.right-content {
  display: flex;
  flex: 1;
  justify-content: end;
}
.search-box {
  display: flex;
  align-items: center;
  justify-self: center;
  width: 200px;
  background-color: #f2f2f4;
  border-radius: 8px;

  .search-icon {
    color: #d1d1d3;
    margin: {
      left: 8px;
      right: 4px;
    }
  }

  input {
    font-size: 16px;
    border: none;
    background: transparent;
    width: 96%;
    font-weight: 600;
  }
}

.active {
  background: #eaefed;
  input,
  .search-icon {
    opacity: 1;
    color: $active-color;
  }
}

.avatar {
  position: relative;
}

.avatar-img {
  height: 30px;
  margin-left: 12px;
  vertical-align: -7px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
}
</style>
