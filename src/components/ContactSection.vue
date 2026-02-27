<template>
  <section id="contact" class="bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
    <div class="container">
      <q-intersection once transition="fade">
        <SectionTitle :title="t('contact.title')" :subtitle="t('contact.subtitle')" />
      </q-intersection>
      <div class="mt-12 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
        <q-intersection once transition="slide-up">
          <div class="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 shadow-lg p-6 sm:p-8">
            <q-form @submit.prevent="onSubmit" class="space-y-4">
              <q-input
                v-model="form.name"
                outlined
                :label="t('contact.form.name')"
                dense
                :rules="[val => !!val || 'Required']"
              />
              <q-input
                v-model="form.email"
                outlined
                :label="t('contact.form.email')"
                dense
                type="email"
                :rules="[val => !!val || 'Required']"
              />
              <q-input
                v-model="form.message"
                outlined
                type="textarea"
                :label="t('contact.form.message')"
                autogrow
                :rules="[val => !!val || 'Required']"
              />
              <div class="flex justify-end">
                <q-btn type="submit" color="primary" :label="t('contact.form.send')" :loading="submitting" unelevated />
              </div>
            </q-form>
          </div>
        </q-intersection>
        <q-intersection once transition="slide-up">
          <div class="rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-500/15 via-cyan-400/10 to-transparent p-6 sm:p-8 shadow-lg space-y-6 dark:border-primary-400/30 dark:from-primary-500/25 dark:via-cyan-400/15 dark:to-transparent">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Social</h3>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="item in social"
                :key="item.name"
                :href="item.url"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-2 rounded-full border bg-white/80 dark:bg-slate-800/80 px-4 py-2 text-sm font-medium hover:-translate-y-0.5 hover:shadow transition"
                :style="{ borderColor: item.color || '#0ea5e9', color: item.color || undefined }"
              >
                <q-icon :name="item.icon" :style="{ color: item.color || undefined }" />
                <span>{{ item.name }}</span>
              </a>
            </div>
          </div>
        </q-intersection>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle.vue';

const i18n = useI18n();
const { t } = i18n;
const $q = useQuasar();
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

