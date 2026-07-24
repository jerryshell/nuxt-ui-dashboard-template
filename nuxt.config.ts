// https://nuxt.com/docs/api/configuration/nuxt-config
// Detect bun runtime + skip in dev (mirrors nuxt-bun-compile's guards).
// Uses globalThis.Bun instead of process.* so no @types/node is required.
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

  // Generate a standalone binary via `bun build --compile`.
  // Equivalent to the `nuxt-bun-compile` module, without the dependency.
  // Run with: bun run build:bin
  nitro: enableBunCompile
    ? {
        preset: "bun",
        noExternals: true,
        inlineDynamicImports: true,
        serveStatic: "inline",
        esbuild: { options: { target: "esnext" } },
      }
    : {},

  // fonts: {
  //   provider: "bunny",
  // },
});
