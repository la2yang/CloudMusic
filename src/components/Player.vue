<template>
  <div class="player">
    <div class="progress-bar">
      <audio
        ref="audioPlayer"
        @timeupdate="updateProgress"
        src="http://m8.music.126.net/20230915234203/2cbf8e79f6b893a19bb4690804cf6182/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
      ></audio>
      <vue-slider
        v-model="player.currentTime"
        :min="0"
        :max="120"
        :interval="1"
        :drag-on-click="true"
        :duration="0"
        :dot-size="12"
        :height="3"
        style="margin-top: -6px"
        :tooltip-formatter="null"
        :lazy="true"
        :silent="true"
      ></vue-slider>
    </div>
    <div class="controls">
      <div class="playing">
        <img class="music-cover" src="@/assets/images/avatar.png" />
        <div class="music-info">
          <a class="music-name">没有名字的夜晚</a>
          <a class="singer">作者</a>
        </div>
        <ButtonIcon class="like-icon" @click="player.isLiked = !player.isLiked">
          <SvgIcon
            class="heart"
            :name="player.isLiked ? 'heart-solid' : 'heart'"
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
            :name="player.isPlaying ? 'play' : 'pause'"
            :style="{ width: '24px', height: '24px' }"
            @click="player.isPlaying = !player.isPlaying"
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
              v-model="player.volume"
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
import { reactive, ref, watch } from 'vue'

import ButtonIcon from './ButtonIcon.vue'
import VueSlider from 'vue-slider-component'

const player = reactive({
  // 是否喜爱
  isLiked: true,
  // 是否播放
  isPlaying: false,
  // 音量
  volume: 10,
  // 当前播放进度
  currentTime: 0,
})

const audioPlayer = ref(null)

const playMusic = () => {
  audioPlayer.value.play()
}

const pauseMusic = () => {
  audioPlayer.value.pause()
}

watch(player, () => {
  if (player.isPlaying) {
    pauseMusic()
  } else {
    playMusic()
  }
})

const updateProgress = () => {
  player.currentTime = audioPlayer.value.currentTime
}
</script>

<style scoped lang="scss">
.player {
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100vw;
  background-color: #fff;
  opacity: 0.9;
  backdrop-filter: blur(20px);
}

.progress-bar {
  position: absolute;
  width: 100%;
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
