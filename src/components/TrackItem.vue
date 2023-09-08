<template>
  <div class="track">
    <img src="@/assets/images/avatar.png" />
    <div class="title-and-singer">
      <div class="title">歌曲名称</div>
      <a class="singer">歌手</a>
    </div>
    <div class="album">专辑名称</div>
    <div class="liked">
      <SvgIcon name="heart" />
    </div>
    <div class="time">3:45</div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
</script>

<style scoped lang="scss">
.track {
  display: flex;
  width: 100%;
  padding: 8px;
  border-radius: 12px;
  align-items: center;
  img {
    height: 46px;
    border-radius: 8px;
    margin-right: 20px;
    cursor: pointer;
  }

  &:hover {
    background-color: #bddbc4;
  }
}

.title-and-singer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 18px;
    font-weight: 600;
    overflow: hidden;
    word-break: break-all;
  }

  .singer {
    margin-top: 8px;
    font-size: 13px;
    opacity: 0.68;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
.album {
  flex: 1;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.liked {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
}

.time {
  width: 50px;
}
</style>
