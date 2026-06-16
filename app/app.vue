<script setup lang="ts">
import { zh_cn } from "@nuxt/ui/locale";

const colorMode = useColorMode();

const color = computed(() => (colorMode.value === "dark" ? "#1b1718" : "white"));

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "zh-CN",
  },
});

const title = "Nuxt 仪表盘模板";
const description =
  "一个基于 Nuxt UI 构建的专业仪表盘模板，包含多个页面、数据可视化和全面的管理能力，适用于打造强大的管理后台界面。";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/dashboard-light.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp :locale="zh_cn">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
