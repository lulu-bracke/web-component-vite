<template>
  <div class="simple-counter">
    <p>Component with Vue and Vite configuration</p>
    <button @click="increment">Increment</button>
    <span>{{ count }}</span>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
}

const decrement = () => {
  count.value--;
}
</script>