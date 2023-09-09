<template>
  <div class="library">
    <h1 class="title">
      <img class="avatar" src="@/assets/images/avatar.png" />
      StaRain的音乐库
    </h1>
    <div class="section-one">
      <div class="recommend-song">
        <h3>我喜欢的音乐</h3>
      </div>
      <div class="liked-songs-list">
        <div class="liked-song-item" v-for="index in 12" :key="index">
          <img class="cover" src="@/assets/images/avatar.png" />
          <div class="info">
            <div class="title">歌曲名称歌曲名称</div>
            <a class="singer">歌手</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  margin-top: 8px;
  margin-right: 10px;
  border-radius: 16px;
  padding: 18px 24px;
  background-color: #a7bfd3;
}

.liked-songs-list {
  flex: 7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  border-radius: 16px;
  padding: 18px 24px;
}
.liked-song-item {
  width: 32%;
  height: 22%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-right: 5px;
  border-radius: 8px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .title {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .singer {
    margin-top: 5px;
    font-size: 13px;
    opacity: 0.68;
    width: fit-content;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
