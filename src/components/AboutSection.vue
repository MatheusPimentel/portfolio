<template>
  <section id="about" class="border-t border-line py-24">
    <div class="container grid gap-12 lg:grid-cols-[1fr,1.4fr]">
      <div>
        <SectionTitle :title="t('about.title')" />
        <img :src="profileImg" alt="" class="mt-8 h-40 w-40 rounded-2xl border border-line object-cover grayscale transition hover:grayscale-0" />
      </div>
      <div>
        <p class="max-w-[62ch] whitespace-pre-line text-lg leading-relaxed text-mute">{{ t('about.description') }}</p>
        <ul class="mt-8 divide-y divide-[var(--line)] border-y border-line">
          <li v-for="h in highlights" :key="h" class="py-3 font-medium">{{ h }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionTitle from './SectionTitle.vue';
import profileImg from 'assets/perfil.png';

const i18n = useI18n();
const { t } = i18n;
const highlights = computed(() => i18n.tm('about.highlights'));
</script>
