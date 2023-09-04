<template>
  <div class="player">
    <div class="progress-bar"></div>
    <div class="controls">
      <div class="playing">
        <img class="music-cover" src="@/assets/images/avatar.png" />
        <div class="music-info">
          <a class="music-name">没有名字的夜晚</a>
          <a class="singer">作者</a>
        </div>
        <ButtonIcon class="like-icon">
          <SvgIcon class="heart" name="heart"></SvgIcon>
        </ButtonIcon>
      </div>
      <div class="middle-control-button"></div>
      <div class="right-control-button"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import ButtonIcon from './ButtonIcon.vue'
</script>

<style scoped lang="scss">
.player {
  position: fixed;
  bottom: 0;
  height: 64px;
  background-color: #fff;
  opacity: 0.85;
}

.progress-bar {
  height: 2px;
  background-color: rgb(77, 58, 58);
  &:hover {
    height: 5px;
  }
}

.controls {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  padding: {
    right: 10vw;
    left: 10vw;
  }
}

@media (max-width: 1336px) {
  .controls {
    padding: 0 5vw;
  }
}
.playing {
  display: flex;
  display: flex;
  align-items: center;
  .music-cover {
    height: 46px;
    border-radius: 5px;
    box-shadow: 0 6px 8px -2px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    user-select: none;
  }
  .music-info {
    height: 46px;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .music-name {
      font-weight: 600;
      font-size: 16px;
      opacity: 0.88;
      color: var(--color-text);
      margin-bottom: 8px;
      overflow: hidden;
      word-break: break-all;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .singer {
      font-size: 12px;
      opacity: 0.58;
      color: var(--color-text);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .like-icon {
    width: 32px;
    height: 32px;
    .heart {
      height: 16px;
    }
  }
}
</style>
