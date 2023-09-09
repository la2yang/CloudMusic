<template>
  <div class="volume-control">
    <input
      type="range"
      min="0"
      max="100"
      v-model="volume"
      @input="updateVolume"
    />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      volume: 50, // 默认音量为50
    }
  },
  methods: {
    updateVolume(event) {
      this.volume = event.target.value
    },
  },
}
</script>

<style>
.volume-control {
  display: flex;
  align-items: center;
}
</style>
