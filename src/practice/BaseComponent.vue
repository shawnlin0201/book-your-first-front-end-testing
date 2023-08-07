<template>
  <div>{{ text }}</div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: 'Hello, Props!'
  }
})
</script>
