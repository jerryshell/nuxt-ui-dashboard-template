// https://nuxt.com/docs/api/configuration/nuxt-config

// === Bun 编译配置 ===
// 仅在 bun runtime 且非 dev 时启用，等价 nuxt-bun-compile 模块（用 globalThis.Bun 检测，无需 @types/node）
const bun = (globalThis as { Bun?: { env?: Record<string, string | undefined> } }).Bun;
const enableBunCompile = !!bun && bun.env?.NODE_ENV !== "development";

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/nuxt"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2026-06-30",

  routeRules: {
    "/api/**": {
      cors: true,
    },
  },

  ui: {
    fonts: false,
  },

  // === Nitro：编译为独立二进制 ===
  // 将 server 打包为单一可执行二进制（bun build --compile），详见 README「构建为独立二进制」
  nitro: enableBunCompile
    ? {
        preset: "bun",
        noExternals: true, // 全部 bundle，不保留 external
        inlineDynamicImports: true, // 内联动态 import（单文件所需）
        serveStatic: "inline", // 静态资源内联进产物
        esbuild: { options: { target: "esnext" } },
      }
    : {},

  // fonts: {
  //   provider: "bunny",
  // },
});
