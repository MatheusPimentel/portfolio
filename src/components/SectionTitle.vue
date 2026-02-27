<template>
  <div class="text-center space-y-2">
    <p v-if="eyebrow" class="text-sm uppercase tracking-[0.35em] text-primary-500 dark:text-primary-300">
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-100">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; subtitle?: string }>();
</script>

