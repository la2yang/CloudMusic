<template>
  <div class="library">
    <h1 class="title">
      <img class="avatar" src="@/assets/images/avatar.png" />
      {{ userStore.user.nickname }}的音乐库
    </h1>
    <div class="section-one">
      <div class="recommend-song">
        <div class="container">My spirit lifted high</div>
        <div class="buttom">
          <div class="title">
            <h1>我喜欢的音乐</h1>
            <h2>50首歌</h2>
          </div>
          <button class="play-button" @click="test">
            <SvgIcon name="play"></SvgIcon>
          </button>
        </div>
      </div>
      <!-- 12首喜欢音乐预览 -->
      <div class="liked-songs-list">
        <div
          class="liked-song-item"
          v-for="(song, index) in filteredLikedSongs"
          :key="song.id"
          @dblclick.native="handleDoubleClick(song)"
        >
          <!-- 根据有无url样式变灰 -->
          <img
            class="cover"
            :src="song.pic || ''"
            :style="song.url ? null : { filter: 'grayscale(100%)' }"
          />
          <div class="info" :style="song.url ? null : { color: '#B8B8B8' }">
            <div class="title">{{ song.name }}</div>
            <div class="singer">{{ song.singer }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 收藏歌单界面: 未完成 -->
    <div class="section-two">
      <div class="playlist-type">
        <ButtonIcon>歌单1</ButtonIcon>
        <ButtonIcon>歌单2</ButtonIcon>
        <ButtonIcon>歌单3</ButtonIcon>
      </div>
      <div class="playlists">
        <Cover
          v-for="index in 7"
          :playlist="likedstore.playlists[index]"
        ></Cover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userLikedSongsIDs, userPlaylist } from '@/api/user'
import { getSongInfo } from '@/api/song'
import { onBeforeMount, reactive } from 'vue'

import Cover from '@/components/Cover.vue'

import useLikedStore, { songType } from '@/store/liked'
import useUserStore from '@/store/user'
import usePlayerStore from '@/store/player'
const likedstore = useLikedStore()
const userStore = useUserStore()
const playerStore = usePlayerStore()

onBeforeMount(() => {
  getLiked()
})

// 进入该页面时获取喜欢的音乐和歌单保存至仓库
const getLiked = async () => {
  try {
    const userLikedSongs: any = await userLikedSongsIDs(userStore.user.userId)
    const lists: any = await userPlaylist(userStore.user.userId)
    likedstore.playlists = lists.playlist

    const songsInfo: any = await getSongInfo(userLikedSongs.ids.join(','))
    likedstore.setLikedSongs(songsInfo.songs)
  } catch (error) {
    console.error('Error fetching liked songs and playlists:', error)
  }
}

// 需要展示的12首歌
let filteredLikedSongs = reactive([])
filteredLikedSongs = likedstore.songs.slice(0, 12)

const handleDoubleClick = (song) => {
  // 先暂停,仓库内更新实现监听isPlaying的值实现播放
  playerStore.isPlaying = false
  playerStore.setPlayerMusic(song)
}

const test = () => {
  console.log(filteredLikedSongs)
}
</script>

<style scoped lang="scss">
.library {
  width: 100%;
}

h1 {
  font-size: 42px;
  color: #000;
  display: flex;
  align-items: center;
  font-weight: bolder;
  .avatar {
    height: 44px;
    margin-right: 12px;
    vertical-align: -7px;
    border-radius: 50%;
    border: rgba(0, 0, 0, 0.2);
  }
}

.section-one {
  display: flex;
  height: 250px;
  margin-top: 24px;
}
.recommend-song {
  flex: 3;
  display: flex;
  color: #72e09b;
  flex-direction: column;
  margin-top: 8px;
  margin-right: 10px;
  border-radius: 16px;
  padding: 18px 24px;
  background-color: $block-hover;
  .container {
    flex: 1;
  }
  .buttom {
    display: flex;
    justify-content: space-between;
  }
  .title {
    h1 {
      color: #1ec25a;
      font-size: 25px;
      margin-bottom: 5px;
    }
  }
}
.play-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  backdrop-filter: blur(8px);
  background: #1ec25a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  svg {
    height: 44%;
    margin: {
      left: 2px;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.94);
  }
}

.liked-songs-list {
  flex: 7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  border-radius: 16px;
  padding: 10px 24px;
}
.liked-song-item {
  width: 32%;
  height: 24%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-right: 5px;
  border-radius: 8px;
  user-select: none;
  img {
    height: 80%;
    margin-right: 5px;
    border-radius: 5px;
  }
  &:hover {
    background-color: $block-hover;
  }
}

.info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .title {
    flex: 1;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .singer {
    flex: 1;
    font-size: 10px;
    opacity: 0.68;
    cursor: pointer;
    padding-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
  }
}
.section-two {
  margin-top: 10px;
}
.playlist-type {
  display: flex;
}

.playlists {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 每行5个盒子 */
  gap: 20px 15px;
}
</style>
