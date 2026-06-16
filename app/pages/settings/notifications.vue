<script setup lang="ts">
import { consola } from "consola";

const state = reactive<{ [key: string]: boolean }>({
  email: true,
  desktop: false,
  product_updates: true,
  weekly_digest: false,
  important_updates: true,
});

const sections = [
  {
    title: "通知渠道",
    description: "我们可以通过哪些方式通知您？",
    fields: [
      {
        name: "email",
        label: "邮件",
        description: "接收每日邮件摘要。",
      },
      {
        name: "desktop",
        label: "桌面",
        description: "接收桌面通知。",
      },
    ],
  },
  {
    title: "账户更新",
    description: "接收关于 Nuxt UI 的更新。",
    fields: [
      {
        name: "weekly_digest",
        label: "每周摘要",
        description: "接收每周新闻摘要。",
      },
      {
        name: "product_updates",
        label: "产品更新",
        description: "每月发送一封邮件，汇总所有新功能和更新。",
      },
      {
        name: "important_updates",
        label: "重要更新",
        description: "接收关于安全修复、维护等重要更新的邮件。",
      },
    ],
  },
];

async function onChange() {
  consola.info("通知设置变更", state);
}
</script>

<template>
  <div v-for="(section, index) in sections" :key="index">
    <UPageCard
      :title="section.title"
      :description="section.description"
      variant="naked"
      class="mb-4"
    />

    <UPageCard variant="subtle" :ui="{ container: 'divide-y divide-default' }">
      <UFormField
        v-for="field in section.fields"
        :key="field.name"
        :name="field.name"
        :label="field.label"
        :description="field.description"
        class="flex items-center justify-between not-last:pb-4 gap-2"
      >
        <USwitch v-model="state[field.name]" @update:model-value="onChange" />
      </UFormField>
    </UPageCard>
  </div>
</template>
