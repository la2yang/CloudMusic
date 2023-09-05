<template>
  <div>
    <button class="button-icon"><slot></slot></button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: transparent;
  margin: 4px;
  border-radius: 10px;
  transition: 0.2s;
  border: 0;
  .svg-icon {
    color: #fff;
    height: 16px;
    width: 16px;
  }
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    background: rgba(209, 209, 214, 0.28);
  }
  &:active {
    transform: scale(0.92);
  }
}
</style>
