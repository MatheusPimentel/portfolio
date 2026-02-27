<template>
  <section id="about" class="bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20">
    <div class="container">
      <q-intersection once transition="fade">
        <SectionTitle :title="t('about.title')" />
      </q-intersection>
      <div class="mt-12 grid gap-12 lg:grid-cols-2 items-center">
        <q-intersection once transition="slide-up">
          <div class="flex justify-center">
            <div class="relative w-56 h-56 sm:w-64 sm:h-64">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-cyan-400 to-indigo-500 blur-3xl opacity-60" />
              <div class="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-xl bg-slate-800 flex items-center justify-center">
                <q-avatar size="200px" font-size="64px" color="primary" text-color="white" class="shadow-lg">
                  <img src="src/assets/perfil.png">
                </q-avatar>
              </div>
            </div>
          </div>
        </q-intersection>
        <q-intersection once transition="slide-up">
          <div class="space-y-6 text-slate-700 dark:text-slate-100">
            <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-200 whitespace-pre-line">{{ t('about.description') }}</p>
            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="highlight in highlights"
                :key="highlight"
                class="flex items-start gap-3 rounded-2xl border border-slate-200/60 dark:border-white/15 bg-white/70 dark:bg-slate-800/70 p-4 shadow-sm"
              >
                <q-icon name="fa-solid fa-check" class="text-primary-500 mt-1" />
                <p class="font-medium text-slate-800 dark:text-slate-100">{{ highlight }}</p>
              </div>
            </div>
          </div>
        </q-intersection>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import SectionTitle from './SectionTitle.vue';
import { computed } from 'vue';

const i18n = useI18n();
const { t } = i18n;
const highlights = computed(() => i18n.tm('about.highlights'));
</script>
