<template>
  <div class="lyrics-page" :class="playerStore.showLyrics ? 'hide' : ''">
    <div class="left-side">
      <div class="cover">
        <img src="@/assets/images/avatar.png" alt="" />
      </div>
    </div>
    <div class="right-side">
      <ButtonIcon
        class="button-icon"
        @click="playerStore.showLyrics = !playerStore.showLyrics"
      >
        <SvgIcon name="arrow-down"></SvgIcon>
      </ButtonIcon>
      <div class="title">
        <div class="music-name">{{ playerStore.name }}</div>
        <div class="singer">歌手: {{ playerStore.singer }}</div>
        <div class="music-list">专辑: {{ playerStore.list }}</div>
      </div>
      <div class="lyrics-info" ref="lyrics">
        <!-- 占位 -->
        <div class="placehoder"></div>
        <div
          class="lyric-box"
          v-for="(lyric, index) in playerStore.lyrics"
          :key="index"
          :class="{ 'current-lyric': index === currentLyricIndex }"
          ref="lyricItem"
        >
          {{ lyric[1] }}
        </div>
        <div class="placehoder"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import usePlayerStore from '@/store/player'
const playerStore = usePlayerStore()

// 创建用于跟踪当前正在播放的歌词的索引
const currentLyricIndex = ref(0)
const lyricItem = ref(null)
const lyrics = ref(null)

const updateCurrentTime = () => {
  // 这里需要根据你的音乐播放器的实际情况获取当前播放时间
  // 以下代码仅作示例，需要替换为实际的获取方式
  // 寻找当前播放时间对应的歌词索引

  for (let i = 0; i < playerStore.lyrics.length; i++) {
    if (playerStore.lyrics[i][0] > playerStore.currentTime) {
      currentLyricIndex.value = Math.max(0, i - 1)
      break
    }
  }
}
watch(
  () => playerStore.currentTime,
  () => {
    updateCurrentTime()
    // 节流(为实现):更新过快
    lyrics.value.scrollTo({
      top:
        lyricItem.value[currentLyricIndex.value].offsetTop -
        lyrics.value.clientHeight / 2,
      behavior: 'smooth',
    })
  },
)
</script>

<style scoped lang="scss">
.lyrics-page {
  position: fixed;
  display: flex;
  justify-content: space-around;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 70px;
  background-color: #e8e7e8;
  padding: {
    left: 10vw;
    right: 10vw;
  }
  z-index: 100;
  min-height: 600px;
}

.left-side {
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  .cover {
    width: 50%;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
}

.right-side {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: {
    top: 20px;
    bottom: 15px;
  }
  .music-name {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .singer,
  .music-list {
    font-size: 18px;
    font-weight: 500;
    color: #919191;
    margin-bottom: 10px;
  }
}

.lyrics-info {
  position: relative;
  flex: 1;
  font-size: 18px;
  width: 100%;
  text-align: center;
  overflow-y: scroll;
  color: #666666;
  .lyric-box {
    height: 25px;
    margin: 30px 20px;
    transition: all 0.5s;
  }
}

.placehoder {
  width: 100%;
  height: 45%;
}

.current-lyric {
  color: #000;
  font-size: 24px;
  font-weight: 600;
}

.button-icon {
  position: absolute;
  right: 10vw;
  top: 10px;
}

@media (max-width: 1336px) {
  .lyrics-page {
    padding: {
      left: 5vw;
      right: 5vw;
    }
  }
  .button-icon {
    right: 5vw;
  }
}
</style>
