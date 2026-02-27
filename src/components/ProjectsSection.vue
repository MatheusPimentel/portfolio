<template>
  <section id="work" class="bg-slate-50 dark:bg-slate-950 py-20">
    <div class="container">
      <q-intersection once transition="fade">
        <SectionTitle :title="t('projects.title')" :subtitle="t('projects.subtitle')" />
      </q-intersection>
      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <q-intersection v-for="project in projects" :key="project.title" once transition="slide-up">
          <div class="group overflow-hidden rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-slate-800/80 shadow-lg">
            <div
              class="relative aspect-[16/9] overflow-hidden"
              :style="project.backgroundColor ? { backgroundColor: project.backgroundColor } : undefined"
            >
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <q-badge
                  v-for="tech in project.tech"
                  :key="tech"
                  :icon="techMeta[tech]?.icon || 'fa-solid fa-code'"
                  class="backdrop-blur text-xs px-3 py-1 uppercase tracking-wide text-white border border-white/10"
                  :label="tech"
                  :style="{ backgroundColor: techMeta[tech]?.color || '#0ea5e9' }"
                />
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ project.title }}</h3>
                  <p class="text-slate-700 dark:text-slate-200 mt-1">{{ project.description }}</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-3">
                <q-btn
                  v-if="project.liveUrl"
                  color="primary"
                  outline
                  size="sm"
                  icon="fa-solid fa-arrow-up-right-from-square"
                  :label="t('hero.visualizar')"
                  :href="project.liveUrl"
                  target="_blank"
                  class="dark:text-white"
                />
                <q-btn
                  v-if="project.repoUrl"
                  outline
                  size="sm"
                  icon="fa-brands fa-github"
                  label="GitHub"
                  :href="project.repoUrl"
                  target="_blank"
                  class="text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>
          </div>
        </q-intersection>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionTitle from './SectionTitle.vue';

const techMeta: Record<string, { icon: string; color: string }> = {
  'Vue 2': { icon: 'fa-brands fa-vuejs', color: '#42b883' },
  Vue: { icon: 'fa-brands fa-vuejs', color: '#42b883' },
  Quasar: { icon: 'fa-solid fa-mountain-sun', color: '#1976d2' },
  Javascript: { icon: 'fa-brands fa-js', color: '#f7df1e' },
  JavaScript: { icon: 'fa-brands fa-js', color: '#f7df1e' },
  TypeScript: { icon: 'fa-solid fa-file-code', color: '#3178c6' },
  Tailwind: { icon: 'fa-solid fa-wind', color: '#38bdf8' },
  'Spring Boot': { icon: 'fa-solid fa-seedling', color: '#6db33f' },
  Java: { icon: 'fa-brands fa-java', color: '#e76f00' },
  PostgreSQL: { icon: 'fa-solid fa-database', color: '#336791' },
  JasperStudio: { icon: 'fa-regular fa-file-lines', color: '#009473' },
  Jenkins: { icon: 'fa-solid fa-gears', color: '#d24939' },
  Docker: { icon: 'fa-brands fa-docker', color: '#0db7ed' },
  Nuxt: { icon: 'fa-solid fa-leaf', color: '#00dc82' },
  i18n: { icon: 'fa-solid fa-language', color: '#8b5cf6' },
  Firestore: { icon: 'fa-solid fa-database', color: '#ff7043' },
  Firebase: { icon: 'fa-solid fa-fire-flame-curved', color: '#ffca28' },
};

const i18n = useI18n();
const { t } = i18n;
const projects = computed(() => i18n.tm('projects.items'));
</script>
