<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="fixed top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-white/20 dark:border-white/10 text-slate-900 dark:text-white"
    >
      <q-toolbar class="container justify-between min-h-[72px]">
        <div class="flex items-center gap-2">
          <q-avatar color="primary" text-color="white" size="32px">
            <img src="src/assets/perfil.png">
          </q-avatar>
          <div class="leading-tight">
            <div class="font-semibold">{{ t('nav.brand') }}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">{{ t('hero.role') }}</div>
          </div>
        </div>

        <div v-show="showNavLinks" class="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-2">
          <q-btn
            v-for="link in navLinks"
            :key="link.target"
            flat
            no-caps
            class="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-500"
            :label="link.label"
            @click="handleNav(link.target)"
          />
        </div>

        <div class="flex items-center gap-1">
          <q-btn flat dense round :icon="themeIcon" :aria-label="t('nav.theme')" @click="toggleDark" />
          <q-btn flat dense round class="text-lg" :aria-label="t('nav.language')" @click="toggleLocale">
            {{ flagEmoji }}
          </q-btn>
          <q-btn flat dense round icon="menu" class="lg:hidden" aria-label="Menu" @click="leftDrawerOpen = true" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      bordered
      class="lg:hidden bg-gradient-to-b from-white/95 via-white/92 to-white/90 dark:from-slate-900/95 dark:via-slate-900/92 dark:to-slate-900/90 backdrop-blur-xl border-l border-primary-500/20 shadow-2xl"
    >
      <div class="px-4 pt-4 pb-2 flex items-center gap-3 border-b border-white/50 dark:border-white/10">
        <q-avatar color="primary" text-color="white" size="36px">
          <img src="src/assets/perfil.png">
        </q-avatar>
        <div class="flex-1">
          <p class="font-semibold text-slate-900 dark:text-white leading-tight">{{ t('nav.brand') }}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('hero.role') }}</p>
        </div>
        <q-btn flat round dense icon="close" @click="leftDrawerOpen = false" />
      </div>
      <q-list padding class="space-y-2 px-3 py-4">
        <q-item
          v-for="link in navLinks"
          :key="link.target"
          clickable
          v-ripple
          class="rounded-xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-slate-800/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg"
          @click="handleNav(link.target)"
        >
          <q-item-section class="text-slate-800 dark:text-slate-100 font-semibold">{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-slate-900/5 dark:bg-slate-950">
      <router-view />
    </q-page-container>
    <q-footer class="bg-white/85 dark:bg-slate-900/85 backdrop-blur border-t border-white/30 dark:border-white/10">
      <div class="container py-4 text-center text-sm text-slate-600 dark:text-slate-300">
        © {{ year }} {{ t('nav.brand') }}. All rights reserved.
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const { t, locale } = useI18n();

const navLinks = computed(() => [
  { label: t('nav.home'), target: 'home' },
  { label: t('nav.about'), target: 'about' },
  { label: t('nav.skills'), target: 'skills' },
  { label: t('nav.work'), target: 'work' },
  { label: t('nav.contact'), target: 'contact' },
]);

const leftDrawerOpen = ref(false);
const isDark = computed(() => $q.dark.isActive);
const themeIcon = computed(() => (isDark.value ? 'fa-regular fa-sun' : 'fa-regular fa-moon'));
const flagEmoji = computed(() => (locale.value === 'pt-BR' ? '🇧🇷' : '🇺🇸'));
const showNavLinks = computed(() => $q.screen.gt.sm);

const toggleDark = () => {
  $q.dark.toggle();
};

const toggleLocale = () => {
  locale.value = locale.value === 'pt-BR' ? 'en-US' : 'pt-BR';
};

const year = new Date().getFullYear();

const handleNav = (target: string) => {
  leftDrawerOpen.value = false;
  requestAnimationFrame(() => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

onMounted(() => {
  if (!$q.dark.isActive) {
    $q.dark.set(true);
  }
});
</script>
