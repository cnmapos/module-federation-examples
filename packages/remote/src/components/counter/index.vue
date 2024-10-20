<script setup lang="ts">
defineProps<{ count: number }>()
const emit = defineEmits(['increase'])

</script>

<template>
  <button
    class="counter-button"
    @click="emit('increase', count)"
  >
    Remote counter: {{ count }}
  </button>
</template>

<style scoped lang="less">
.counter-button {
  border: 0 solid #e2e8f0;
  margin-top: 10px;
  background-color: rgb(246, 179, 82);
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: rgb(24, 24, 24);
}
</style>
