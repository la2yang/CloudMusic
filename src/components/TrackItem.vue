<template>
  <div class="track">
    <img src="@/assets/images/avatar.png" />
    <div class="title-and-singer">
      <div class="title">歌曲名称</div>
      <a class="singer">歌手</a>
    </div>
    <div class="album">专辑名称</div>
    <div class="controls-icon">
      <SvgIcon class="play-icon" name="play"></SvgIcon>
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
    background-color: #efefef;
    .controls-icon {
      opacity: 1;
    }
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
    cursor: default;
    word-break: break-all;
  }

  .singer {
    margin-top: 8px;
    font-size: 13px;
    opacity: 0.68;
    width: fit-content;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: $active-color;
    }
  }
}
.album {
  flex: 1;
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
  &:hover {
    text-decoration: underline;
    color: $active-color;
  }
}

.controls-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  svg {
    margin-right: 10px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.9);
    }
  }
  .play-icon {
    color: $active-color;
  }
}

.time {
  width: 50px;
  margin-left: 20px;
}
</style>
