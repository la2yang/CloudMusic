<template>
  <div class="home">
    <navbar />
    <div class="main">
      <RouterView></RouterView>
      <library />
      <TrackItem />
    </div>
    <Player />
  </div>
</template>

<script setup lang="ts">
import navbar from '@/components/Navbar.vue'
import Player from '@/components/Player.vue'
import library from './library.vue'
import TrackItem from '@/components/TrackItem.vue'
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  padding: 64px 10vw 96px 10vw;
}

@media (max-width: 1336px) {
  .main {
    padding: {
      left: 5vw;
      right: 5vw;
    }
  }
}
</style>
