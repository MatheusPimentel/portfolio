<template>
  <section id="home" class="relative overflow-hidden pt-32 pb-24 sm:pt-40">
    <div class="grid-bg absolute inset-0" aria-hidden="true" />
    <div class="container relative grid gap-14 lg:grid-cols-[1.25fr,1fr] lg:items-center">
      <div>
        <h1 class="rise text-5xl sm:text-7xl font-semibold">{{ t('hero.name') }}</h1>
        <p class="rise mt-4 text-xl sm:text-2xl font-medium" style="animation-delay: 0.08s">{{ t('hero.role') }}</p>
        <p class="rise mt-5 max-w-xl text-lg leading-relaxed text-mute" style="animation-delay: 0.16s">{{ t('hero.punchline') }}</p>
        <div class="rise mt-9 flex flex-wrap gap-3" style="animation-delay: 0.24s">
          <a class="btn btn-primary" :href="cvUrl" download>
            <q-icon name="fa-solid fa-file-arrow-down" size="14px" />{{ t('hero.ctaDownload') }}
          </a>
          <a class="btn" href="https://github.com/MatheusPimentel" target="_blank" rel="noreferrer">
            <q-icon name="fa-brands fa-github" size="15px" />{{ t('hero.ctaGithub') }}
          </a>
          <a class="btn" href="#work" @click.prevent="go('work')">{{ t('hero.ctaProjects') }}</a>
        </div>
      </div>

      <div class="rise panel p-2" style="animation-delay: 0.32s">
        <div
          v-for="(layer, i) in layers"
          :key="layer.label"
          class="group relative flex flex-col gap-3 rounded-xl p-5 transition-colors hover:bg-[color-mix(in_srgb,var(--fg)_5%,transparent)]"
          :class="i < layers.length - 1 ? 'border-b border-line' : ''"
        >
          <div class="flex items-center gap-2 text-sm font-medium">
            <span class="h-2 w-2 rounded-[2px] bg-line transition-colors group-hover:bg-accent" />{{ layer.label }}
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in layer.stack" :key="s" class="tag">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import cvUrl from 'assets/CV.pdf';

const i18n = useI18n();
const { t } = i18n;
const layers = computed(() => i18n.tm('hero.layers'));
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
</script>
