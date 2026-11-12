<template>
  <section id="skills" class="border-t border-line py-24">
    <div class="container">
      <SectionTitle :title="t('skills.title')" :subtitle="t('skills.subtitle')" />
      <div class="mt-12 divide-y divide-[var(--line)] border-y border-line">
        <div v-for="c in categories" :key="c.title" class="grid gap-3 py-6 sm:grid-cols-[220px,1fr]">
          <h3 class="text-base font-semibold">{{ c.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="i in c.items" :key="i.name" class="tag !text-sm">{{ i.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionTitle from './SectionTitle.vue';

const i18n = useI18n();
const { t } = i18n;
const categories = computed(() => i18n.tm('skills.categories'));
</script>
