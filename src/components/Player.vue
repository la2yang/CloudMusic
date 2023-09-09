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
        <ButtonIcon class="like-icon" @click="isLiked = !isLiked">
          <SvgIcon
            class="heart"
            :name="isLiked ? 'heart-solid' : 'heart'"
          ></SvgIcon>
        </ButtonIcon>
      </div>
      <div class="middle-control-button">
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="front"></SvgIcon>
        </ButtonIcon>
        <ButtonIcon class="button-icon">
          <SvgIcon
            class="play"
            :name="isPlaying ? 'play' : 'pause'"
            :style="{ width: '24px', height: '24px' }"
            @click="isPlaying = !isPlaying"
          ></SvgIcon>
        </ButtonIcon>
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="next"></SvgIcon>
        </ButtonIcon>
      </div>
      <div class="right-control-button">
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="list"></SvgIcon>
        </ButtonIcon>
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="repeat"></SvgIcon>
        </ButtonIcon>
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="shuffle"></SvgIcon>
        </ButtonIcon>
        <div class="volume-control">
          <ButtonIcon class="button-icon">
            <SvgIcon class="front" name="volume"></SvgIcon>
          </ButtonIcon>
          <div class="volume-slider">
            <vue-slider
              v-model="volume"
              :min="0"
              :max="100"
              :interval="1"
            ></vue-slider>
          </div>
        </div>
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="arrow-up"></SvgIcon>
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/styles/slider.scss'
import SvgIcon from './SvgIcon.vue'
import ButtonIcon from './ButtonIcon.vue'
import VueSlider from 'vue-slider-component'
import { ref } from 'vue'

const isLiked = ref(true)
const isPlaying = ref(false)
const volume = ref(10)
</script>

<style scoped lang="scss">
.player {
  position: fixed;
  bottom: 0;
  height: 64px;
  width: 100vw;

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
    padding: {
      right: 5vw;
      left: 5vw;
    }
  }
}
.playing {
  display: flex;
  display: flex;
  align-items: center;
}
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
  margin-left: 5px;
  transition: 0.2s;
  .heart {
    height: 16px;
  }
}

.middle-control-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-control-button {
  display: flex;
  justify-content: right;
  align-items: center;
}

.volume-control {
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 5px;
  .volume-slider {
    width: 100px;
  }
}
</style>
