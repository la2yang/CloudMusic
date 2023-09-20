<template>
  <div>
    <div class="title">发现</div>
    <div class="button-type">
      <div class="button">全部</div>
      <div class="button">推荐歌单</div>
      <div class="button">精品歌单</div>
      <div class="button">官方</div>
    </div>
    <div class="cover-container">
      <Cover v-for="index in 7" :playlist="likedStore.playlists[index]"></Cover>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLikedStore from '@/store/liked'
const likedStore = useLikedStore()
</script>

<style scoped lang="scss">
.title {
  font-size: 40px;
  font-weight: 800;
  margin-top: 30px;
}

.button-type {
  display: flex;
  margin: 15px 0;
  .button {
    user-select: none;
    cursor: pointer;
    padding: 8px 16px;
    margin: 10px 16px 6px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    border-radius: 8px;
    background-color: #f5f5f7;
    color: #7a7a7b;
    transition: 0.2s;

    &:hover {
      background-color: $block-hover;
      color: $active-color;
    }
  }
  .button.active {
    background-color: var(--color-primary-bg);
    color: var(--color-primary);
  }
}
.cover-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 每行5个盒子 */
  gap: 20px 15px;
}
</style>
