<template>
  <div class="player">
    <div class="progress-bar">
      <audio
        ref="audioPlayer"
        :src="playerStore.url"
        @timeupdate="updateProgress"
      ></audio>
      <vue-slider
        v-model="playerStore.currentTime"
        :min="0"
        :max="playerStore.dt"
        :interval="1"
        :drag-on-click="true"
        :duration="0"
        :dot-size="12"
        :height="3"
        :tooltip-formatter="formatTime"
        @change="changeCurrentTime"
        style="margin-top: -6px"
        :lazy="true"
        :silent="true"
      ></vue-slider>
    </div>

    <div class="controls">
      <div class="playing">
        <img class="music-cover" :src="playerStore.pic" />
        <div class="music-info">
          <a class="music-name">{{ playerStore.name }}</a>
          <a class="singer">{{ playerStore.singer }}</a>
        </div>
        <ButtonIcon
          class="like-icon"
          @click="playerStore.isLiked = !playerStore.isLiked"
        >
          <SvgIcon
            class="heart"
            :name="playerStore.isLiked ? 'heart-solid' : 'heart'"
          ></SvgIcon>
        </ButtonIcon>
      </div>
      <div class="middle-control-button">
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="front"></SvgIcon>
        </ButtonIcon>
        <ButtonIcon
          class="button-icon"
          @click="playerStore.isPlaying = !playerStore.isPlaying"
        >
          <SvgIcon
            class="play"
            :name="playerStore.isPlaying ? 'pause' : 'play'"
            :style="{ width: '24px', height: '24px' }"
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
        <ButtonIcon class="button-icon">
          <SvgIcon class="front" name="volume"></SvgIcon>
        </ButtonIcon>
        <div class="volume-slider">
          <vue-slider
            v-model="player.volume"
            :min="0"
            :max="100"
            :interval="1"
            :drag-on-click="true"
            :duration="0"
            :dot-size="10"
            :height="4"
            @change="changeVolume"
          ></vue-slider>
        </div>
        <ButtonIcon class="button-icon" @click="showLyrics">
          <SvgIcon class="arrow-up" name="arrow-up"></SvgIcon>
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/styles/slider.scss'
import { reactive, ref, watch } from 'vue'
import { getLyric } from '@/api/song'
import switchLyric from '@/utils/lyric'

import VueSlider from 'vue-slider-component'

import usePlayerStore from '@/store/player'
const playerStore = usePlayerStore()

const player = reactive({
  volume: 50,
})

const audioPlayer = ref(null)

// 控制音乐播放
watch(
  () => playerStore.isPlaying,
  () => {
    if (!playerStore.isPlaying && playerStore.url) {
      audioPlayer.value.pause()
    } else {
      audioPlayer.value.play()
    }
  },
)
// 进度条更新
const updateProgress = () => {
  playerStore.currentTime = audioPlayer.value.currentTime
}

// 改变实现显示
const formatTime = (value) => {
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// 当滑块值改变时，更新音频播放时间
const changeCurrentTime = (value) => {
  playerStore.currentTime = value
  audioPlayer.value.currentTime = playerStore.currentTime
}

// 调整时间
const changeVolume = (value) => {
  player.volume = value
  audioPlayer.value.volume = player.volume / 100
}
// 展开歌词界面
const showLyrics = async () => {
  playerStore.showLyrics = !playerStore.showLyrics

  // 获取歌词
  const result: any = await getLyric(playerStore.id)
  playerStore.lyrics = switchLyric(result.lrc.lyric)
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
  z-index: 200;
}

.progress-bar {
  position: absolute;
  width: 100%;
}

.controls {
  display: flex;
  justify-content: space-between;
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
  flex: 1;
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
  flex: 1;
  justify-content: center;
  align-items: center;
}
.right-control-button {
  display: flex;
  flex: 1;
  justify-content: right;
  align-items: center;
  .volume-slider {
    width: 80px;
    margin-right: 5px;
  }
}
</style>
