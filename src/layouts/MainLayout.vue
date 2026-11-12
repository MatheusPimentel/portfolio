<template>
  <q-layout view="hHh lpr fFf">
    <q-header class="fixed top-0 border-b border-line bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] text-fg backdrop-blur-md">
      <q-toolbar class="container min-h-[64px] justify-between">
        <a href="#home" class="font-semibold tracking-tight" @click.prevent="handleNav('home')">{{ t('nav.brand') }}</a>
        <nav v-show="showNavLinks" class="flex items-center gap-1" aria-label="Principal">
          <a v-for="link in navLinks" :key="link.target" :href="'#' + link.target" class="rounded-lg px-3 py-2 text-sm text-mute transition-colors hover:text-fg" @click.prevent="handleNav(link.target)">{{ link.label }}</a>
        </nav>
        <div class="flex items-center gap-1">
          <q-btn flat dense round size="sm" :icon="themeIcon" :aria-label="t('nav.theme')" @click="toggleDark" />
          <q-btn flat dense no-caps class="font-mono text-xs" :label="langLabel" :aria-label="t('nav.language')" @click="toggleLocale" />
          <q-btn flat dense round icon="menu" class="lg:hidden" aria-label="Menu" @click="leftDrawerOpen = true" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="right" overlay class="bg-bg text-fg">
      <q-list class="p-4">
        <q-item v-for="link in navLinks" :key="link.target" clickable v-ripple class="rounded-lg" @click="handleNav(link.target)">
          <q-item-section class="font-medium">{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="border-t border-line bg-bg text-mute">
      <div class="container py-6 text-sm">© {{ year }} {{ t('nav.brand') }}. {{ t('nav.rights') }}</div>
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
const langLabel = computed(() => (locale.value === 'pt-BR' ? 'EN' : 'PT'));
const showNavLinks = computed(() => $q.screen.gt.sm);

const toggleDark = () => {
  $q.dark.toggle();
  try { localStorage.setItem('theme', $q.dark.isActive ? 'dark' : 'light'); } catch { /* ignore */ }
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
  let saved: string | null = null;
  try { saved = localStorage.getItem('theme'); } catch { /* ignore */ }
  $q.dark.set(saved ? saved === 'dark' : true);
});
</script>
