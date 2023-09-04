<template>
  <div class="home">
    <navbar />
    <img src="@/assets/images/avatar.png" alt="" srcset="" />
    <Player />
  </div>
</template>

<script setup lang="ts">
import navbar from '@/components/Navbar.vue'
import Player from '@/components/Player.vue'
</script>

<style scoped lang="scss">
* {
  width: 100vw;
  height: 100vh;
  // background-color: #802121;
}
.home {
  padding-top: 64px;
}
</style>
