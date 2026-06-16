<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

defineProps<{
  collapsed?: boolean;
}>();

const colorMode = useColorMode();
const appConfig = useAppConfig();

const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];
const neutrals = ["slate", "gray", "zinc", "neutral", "stone"];

const colorLabels: Record<string, string> = {
  red: "红色",
  orange: "橙色",
  amber: "琥珀色",
  yellow: "黄色",
  lime: "青柠色",
  green: "绿色",
  emerald: "翠绿色",
  teal: "蓝绿色",
  cyan: "青色",
  sky: "天蓝色",
  blue: "蓝色",
  indigo: "靛蓝色",
  violet: "紫罗兰色",
  purple: "紫色",
  fuchsia: "紫红色",
  pink: "粉色",
  rose: "玫瑰色",
};

const neutralLabels: Record<string, string> = {
  slate: "石板灰",
  gray: "灰色",
  zinc: "锌灰色",
  neutral: "中性灰",
  stone: "石头灰",
};

const user = ref({
  name: "本杰明·卡纳克",
  avatar: {
    src: "https://github.com/benjamincanac.png",
    alt: "本杰明·卡纳克",
  },
});

const items = computed<DropdownMenuItem[][]>(() => [
  [
    {
      type: "label",
      label: user.value.name,
      avatar: user.value.avatar,
    },
  ],
  [
    {
      label: "个人资料",
      icon: "i-lucide-user",
    },
    {
      label: "账单",
      icon: "i-lucide-credit-card",
    },
    {
      label: "设置",
      icon: "i-lucide-settings",
      to: "/settings",
    },
  ],
  [
    {
      label: "主题",
      icon: "i-lucide-palette",
      children: [
        {
          label: "主题色",
          slot: "chip",
          chip: appConfig.ui.colors.primary,
          content: {
            align: "center",
            collisionPadding: 16,
          },
          children: colors.map((color) => ({
            label: `${colorLabels[color]} (${color})`,
            chip: color,
            slot: "chip",
            checked: appConfig.ui.colors.primary === color,
            type: "checkbox",
            onSelect: (e) => {
              e.preventDefault();

              appConfig.ui.colors.primary = color;
            },
          })),
        },
        {
          label: "中性色",
          slot: "chip",
          chip:
            appConfig.ui.colors.neutral === "neutral" ? "old-neutral" : appConfig.ui.colors.neutral,
          content: {
            align: "end",
            collisionPadding: 16,
          },
          children: neutrals.map((color) => ({
            label: `${neutralLabels[color]} (${color})`,
            chip: color === "neutral" ? "old-neutral" : color,
            slot: "chip",
            type: "checkbox",
            checked: appConfig.ui.colors.neutral === color,
            onSelect: (e) => {
              e.preventDefault();

              appConfig.ui.colors.neutral = color;
            },
          })),
        },
      ],
    },
    {
      label: "外观",
      icon: "i-lucide-sun-moon",
      children: [
        {
          label: "浅色",
          icon: "i-lucide-sun",
          type: "checkbox",
          checked: colorMode.value === "light",
          onSelect(e: Event) {
            e.preventDefault();

            colorMode.preference = "light";
          },
        },
        {
          label: "深色",
          icon: "i-lucide-moon",
          type: "checkbox",
          checked: colorMode.value === "dark",
          onUpdateChecked(checked: boolean) {
            if (checked) {
              colorMode.preference = "dark";
            }
          },
          onSelect(e: Event) {
            e.preventDefault();
          },
        },
      ],
    },
  ],
  [
    {
      label: "模板",
      icon: "i-lucide-layout-template",
      children: [
        {
          label: "Starter",
          to: "https://starter-template.nuxt.dev/",
        },
        {
          label: "Landing",
          to: "https://landing-template.nuxt.dev/",
        },
        {
          label: "Docs",
          to: "https://docs-template.nuxt.dev/",
        },
        {
          label: "SaaS",
          to: "https://saas-template.nuxt.dev/",
        },
        {
          label: "Dashboard",
          to: "https://dashboard-template.nuxt.dev/",
          color: "primary",
          checked: true,
          type: "checkbox",
        },
        {
          label: "Chat",
          to: "https://chat-template.nuxt.dev/",
        },
        {
          label: "Portfolio",
          to: "https://portfolio-template.nuxt.dev/",
        },
        {
          label: "Changelog",
          to: "https://changelog-template.nuxt.dev/",
        },
      ],
    },
  ],
  [
    {
      label: "文档",
      icon: "i-lucide-book-open",
      to: "https://ui.nuxt.com/docs/getting-started/installation/nuxt",
      target: "_blank",
    },
    {
      label: "GitHub 仓库",
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt-ui-templates/dashboard",
      target: "_blank",
    },
    {
      label: "退出登录",
      icon: "i-lucide-log-out",
    },
  ],
]);
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{ content: collapsed ? 'w-48' : 'w-(--reka-dropdown-menu-trigger-width)' }"
  >
    <UButton
      v-bind="{
        ...user,
        label: collapsed ? undefined : user?.name,
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down',
      }"
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      class="data-[state=open]:bg-elevated"
      :ui="{
        trailingIcon: 'text-dimmed',
      }"
    />

    <template #chip-leading="{ item }">
      <div class="inline-flex items-center justify-center shrink-0 size-5">
        <span
          class="rounded-full ring ring-bg bg-(--chip-light) dark:bg-(--chip-dark) size-2"
          :style="{
            '--chip-light': `var(--color-${(item as any).chip}-500)`,
            '--chip-dark': `var(--color-${(item as any).chip}-400)`,
          }"
        />
      </div>
    </template>
  </UDropdownMenu>
</template>
