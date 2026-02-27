<template>
  <section id="skills" class="bg-slate-50 dark:bg-slate-950 py-20">
    <div class="container">
      <q-intersection once transition="fade">
        <SectionTitle :title="t('skills.title')" :subtitle="t('skills.subtitle')" />
      </q-intersection>
      <q-intersection once transition="slide-up">
        <div class="mt-12 space-y-10">
          <div v-for="category in categories" :key="category.title" class="space-y-4">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ category.title }}</h3>
            <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              <div
                v-for="item in category.items"
                :key="item.name"
                class="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <q-icon
                  :name="item.icon"
                  size="36px"
                  class="group-hover:scale-110 transition-transform"
                  :style="{ color: item.color || 'var(--q-primary)' }"
                />
                <p class="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </q-intersection>
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
