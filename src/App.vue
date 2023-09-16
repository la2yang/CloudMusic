<template>
  <div>
    <navbar />
    <div class="main">
      <RouterView></RouterView>
    </div>
    <Player />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/user'

import Navbar from '@/components/Navbar.vue'
import Player from '@/components/Player.vue'

const userStore = useUserStore()

onMounted(() => {
  if (localStorage.getItem('cookie')) {
    userStore.setUserInfo(JSON.parse(localStorage.getItem('user')))
  }
})
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
