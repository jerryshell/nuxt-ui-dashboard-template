<script setup lang="ts">
withDefaults(
  defineProps<{
    count?: number;
  }>(),
  {
    count: 0,
  },
);

const open = ref(false);

async function onSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  open.value = false;
}
</script>

<template>
  <UModal
    v-model:open="open"
    :title="`删除 ${count} 位客户`"
    :description="`确定要删除吗？此操作无法撤销。`"
  >
    <slot />

    <template #body>
      <div class="flex justify-end gap-2">
        <UButton
          label="取消"
          color="neutral"
          variant="subtle"
          @click="
            () => {
              open = false;
            }
          "
        />
        <UButton label="删除" color="error" variant="solid" loading-auto @click="onSubmit" />
      </div>
    </template>
  </UModal>
</template>
