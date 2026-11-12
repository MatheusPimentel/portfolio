<template>
  <section id="contact" class="border-t border-line py-24">
    <div class="container grid gap-12 lg:grid-cols-[1.2fr,1fr]">
      <div>
        <SectionTitle :title="t('contact.title')" :subtitle="t('contact.subtitle')" />
        <q-form class="panel mt-10 space-y-4 p-6 sm:p-8" @submit.prevent="onSubmit">
          <q-input v-model="form.name" outlined dense :label="t('contact.form.name')" :rules="[(v) => !!v || 'Required']" />
          <q-input v-model="form.email" outlined dense type="email" :label="t('contact.form.email')" :rules="[(v) => !!v || 'Required']" />
          <q-input v-model="form.message" outlined type="textarea" autogrow :label="t('contact.form.message')" :rules="[(v) => !!v || 'Required']" />
          <button type="submit" class="btn btn-primary" :disabled="submitting">{{ t('contact.form.send') }}</button>
        </q-form>
      </div>
      <ul class="self-end divide-y divide-[var(--line)] border-y border-line">
        <li v-for="s in social" :key="s.name">
          <a :href="s.url" target="_blank" rel="noreferrer" class="group flex items-center justify-between py-4 transition-colors hover:text-accent">
            <span class="flex items-center gap-3"><q-icon :name="s.icon" size="18px" />{{ s.name }}</span>
            <q-icon name="fa-solid fa-arrow-up-right-from-square" size="12px" class="opacity-40 transition group-hover:opacity-100" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle.vue';

const $q = useQuasar();
const i18n = useI18n();
const { t } = i18n;
const social = computed(() => i18n.tm('contact.social'));

const form = reactive({ name: '', email: '', message: '' });
const submitting = ref(false);

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

const onSubmit = async () => {
  submitting.value = true;
  try {
    const sendPayload = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      sendPayload,
      {
        publicKey: emailConfig.publicKey,
      }
    );
    console.log('EmailJS success');
    $q.notify({ type: 'positive', message: t('contact.form.success') });
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error) {
    console.error('EmailJS error', error);
    $q.notify({ type: 'negative', message: t('contact.form.error') });
  } finally {
    submitting.value = false;
  }
};
</script>

