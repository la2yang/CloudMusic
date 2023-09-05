<template>
  <div class="Navbar">
    <div class="navigation-arrow">
      <ButtonIcon>
        <el-icon><ArrowLeftBold /></el-icon>
      </ButtonIcon>
      <ButtonIcon>
        <el-icon><ArrowRightBold /></el-icon>
      </ButtonIcon>
    </div>
    <div class="navigation">
      <ButtonIcon class="home">
        <router-link to="/home">首页</router-link>
      </ButtonIcon>
      <ButtonIcon class="explore">
        <router-link to="/home">发现</router-link>
      </ButtonIcon>
      <ButtonIcon class="library">
        <router-link to="/home">音乐库</router-link>
      </ButtonIcon>
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
      <img class="avatar" src="../assets/images/avatar.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonIcon from './ButtonIcon.vue'
import SvgIcon from './SvgIcon.vue'

let isFocused = ref(false)
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
  opacity: 0.85;
  padding: {
    right: 10vw;
    left: 10vw;
  }
}

@media (max-width: 1336px) {
  .container {
    padding: 0 5vw;
  }
}

.navigation-arrow {
  flex: 1;
  display: flex;
  align-items: left;
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
    &:active {
      color: $active-color;
    }
  }
}

.right-content {
  display: flex;
  flex: 1;
  justify-content: end;

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
    height: 30px;
    margin-left: 12px;
    vertical-align: -7px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
}
</style>
