<template>
  <q-page class="bg-slate-900/5 dark:bg-slate-950">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </q-page>
</template>

<script setup lang="ts">
import HeroSection from 'components/HeroSection.vue';
import AboutSection from 'components/AboutSection.vue';
import SkillsSection from 'components/SkillsSection.vue';
import ProjectsSection from 'components/ProjectsSection.vue';
import ContactSection from 'components/ContactSection.vue';
</script>
