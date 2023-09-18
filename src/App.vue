<template>
  <div class="app">
    <navbar />
    <div class="main">
      <RouterView></RouterView>
    </div>
    <Player />
    <transition name="slide-up">
      <Lyrics v-if="playerStore.showLyrics" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Player from '@/components/Player.vue'
import Lyrics from './views/lyrics.vue'

import useUserStore from '@/store/user'
import useplayerStore from './store/player'
const userStore = useUserStore()
const playerStore = useplayerStore()

onMounted(() => {
  if (localStorage.getItem('cookie')) {
    userStore.setUserInfo(JSON.parse(localStorage.getItem('user')))
  }
})
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

.app {
  overflow: hidden;
  position: relative;
}

.main {
  width: 100%;
  overflow: hidden;
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0.5;
  transform: translateY(100%);
}
</style>
