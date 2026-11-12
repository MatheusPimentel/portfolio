<template>
  <div class="max-w-2xl">
    <h2 class="text-3xl sm:text-4xl font-semibold">{{ title }}</h2>
    <p v-if="subtitle" class="mt-3 text-mute">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>();
</script>
