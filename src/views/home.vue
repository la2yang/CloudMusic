<template>
  <div>
    <div class="title">推荐歌单</div>
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
  margin: 30px 0;
}

.cover-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 每行5个盒子 */
  gap: 20px 15px;
}
</style>
