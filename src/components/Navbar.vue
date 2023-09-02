<template>
  <div class="container">
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
      <div class="search-box">
        <div class="input">
          <el-icon><Search /></el-icon>
          <input ref="searchInput" type="search" placeholder="搜索" />
        </div>
      </div>
      <ButtonIcon class="avatar">头像</ButtonIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonIcon from './ButtonIcon.vue'
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #fff;
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
  display: flex;
  flex: 1;
  align-items: left;
}

.navigation {
  flex: 1;
  display: flex;
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
  justify-self: end;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
