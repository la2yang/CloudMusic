<template>
  <div class="container" v-if="props.playlist">
    <div
      class="cover"
      :style="{ backgroundImage: `url('${playlist.coverImgUrl}')` }"
    >
      <button class="play-button">
        <SvgIcon name="play"></SvgIcon>
      </button>
    </div>
    <div class="text">
      <div class="title">{{ playlist.name }}</div>
      <div class="info">by {{ playlist.creator.nickname }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['playlist'])
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

.cover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1; /* 设置宽高比为1:1 */
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
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .info {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.7;
    margin-bottom: 2px;
  }
}
</style>
