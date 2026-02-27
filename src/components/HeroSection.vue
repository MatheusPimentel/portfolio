<template>
  <section id="home" class="relative overflow-hidden pt-28 pb-20 sm:pt-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
    <div class="container">
      <q-intersection once transition="slide-up">
        <div class="grid gap-10 lg:grid-cols-2 items-center">
          <div class="space-y-6">
            <p class="text-sm uppercase tracking-[0.35em] text-primary-300">{{ t('hero.greeting') }}</p>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
              <span class="block text-primary-300">{{ t('hero.name') }}</span>
              {{ t('hero.role') }}
            </h1>
            <p class="text-lg text-slate-200">{{ t('hero.punchline') }}</p>
            <div class="flex flex-wrap items-center gap-3">
              <a
                href="#"
                class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:shadow-primary-500/50"
                download
              >
                <q-icon name="fa-solid fa-file-arrow-down" size="16px" />
                <span>{{ t('hero.ctaDownload') }}</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-primary-400/60 px-5 py-3 text-sm font-semibold text-primary-100 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-primary-300"
              >
                <q-icon name="fa-brands fa-github" size="16px" />
                <span>{{ t('hero.ctaGithub') }}</span>
              </a>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-300">
              <span class="h-px w-10 bg-primary-300" />
              <span>{{ t('about.subtitle') }}</span>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-primary-500/30 blur-3xl" />
            <div class="relative rounded-3xl bg-white/10 border border-white/10 p-8 shadow-2xl">
              <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-400 via-primary-500 to-cyan-400 flex items-center justify-center">
                <q-icon name="fa-solid fa-code" size="64px" class="text-white drop-shadow-lg" />
              </div>
              <div class="mt-6 grid grid-cols-3 gap-3 text-center text-slate-200 text-sm">
                <div class="rounded-xl border border-white/10 p-3">
                  <p class="font-semibold">Vue 3</p>
                  <p class="text-xs text-slate-300">+ TypeScript</p>
                </div>
                <div class="rounded-xl border border-white/10 p-3">
                  <p class="font-semibold">Quasar</p>
                  <p class="text-xs text-slate-300">Design System</p>
                </div>
                <div class="rounded-xl border border-white/10 p-3">
                  <p class="font-semibold">Tailwind</p>
                  <p class="text-xs text-slate-300">Motion friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-intersection>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

