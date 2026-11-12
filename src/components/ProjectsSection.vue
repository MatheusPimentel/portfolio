<template>
  <section id="work" class="border-t border-line py-24">
    <div class="container">
      <SectionTitle :title="t('projects.title')" :subtitle="t('projects.subtitle')" />
      <div class="mt-12 space-y-6">
        <article v-for="p in projects" :key="p.title" class="panel group grid gap-0 overflow-hidden lg:grid-cols-[1fr,1.2fr]">
          <div
            class="flex min-h-[220px] items-center justify-center border-b border-line p-8 lg:border-b-0 lg:border-r"
            :style="p.backgroundColor && p.backgroundColor !== 'null' ? { backgroundColor: p.backgroundColor } : undefined"
          >
            <img :src="p.image" :alt="p.title" class="max-h-44 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <div class="flex flex-col gap-5 p-7 sm:p-9">
            <div>
              <h3 class="text-2xl font-semibold">{{ p.title }}</h3>
              <p class="mt-2 text-mute">{{ p.description }}</p>
            </div>
            <div>
              <p class="text-sm font-medium">{{ t('projects.challenge') }}</p>
              <p class="mt-1 max-w-[60ch] text-mute">{{ p.challenge }}</p>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium">{{ t('projects.stack') }}</p>
              <div class="flex flex-wrap gap-2"><span v-for="s in p.tech" :key="s" class="tag">{{ s }}</span></div>
            </div>
            <div class="mt-auto flex flex-wrap items-center gap-3 pt-2">
              <a v-if="p.liveUrl" class="btn btn-primary" :href="p.liveUrl" target="_blank" rel="noreferrer">
                {{ t('projects.live') }}<q-icon name="fa-solid fa-arrow-up-right-from-square" size="12px" />
              </a>
              <a v-if="p.repoUrl" class="btn" :href="p.repoUrl" target="_blank" rel="noreferrer">
                <q-icon name="fa-brands fa-github" size="15px" />GitHub
              </a>
              <span v-else class="text-sm text-mute">{{ t('projects.private') }}</span>
            </div>
          </div>
        </article>
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
const projects = computed(() => i18n.tm('projects.items'));
</script>
