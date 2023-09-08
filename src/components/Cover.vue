<template>
  <div class="container">
    <div
      class="cover"
      style="background-image: url('src/assets/images/avatar.png')"
    >
      <button class="play-button">
        <SvgIcon name="play"></SvgIcon>
      </button>
    </div>
    <div class="text">
      <a class="title">歌单名称</a>
      <div class="info">歌手,用户等</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import ButtonIcon from './ButtonIcon.vue'
</script>

<style scoped lang="scss">
.container {
  position: relative;
  margin: 15px;
}

.cover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background: #fff;
  background-size: cover;
  border-radius: 15px;
  cursor: pointer;

  .play-button {
    display: flex;
    display: none;
    justify-content: center;
    align-items: center;
    color: white;
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.08);
    height: 22%;
    width: 22%;
    border-radius: 50%;
    cursor: default;
    transition: 0.2s;
    svg {
      height: 44%;
      margin: {
        left: 2px;
      }
    }
    &:hover {
      background: rgba(255, 255, 255, 0.28);
    }
    &:active {
      transform: scale(0.94);
    }
  }

  &:hover {
    .play-button {
      display: flex;
    }

    &::before {
      // 真实阴影
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 90%;
      height: 100%;
      background: inherit;
      filter: blur(10px);
      background-size: cover;
      opacity: 0.7;
      z-index: -1;
    }
  }
}

.text {
  margin-top: 15px;
  .title {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .info {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.7;
  }
}
</style>
