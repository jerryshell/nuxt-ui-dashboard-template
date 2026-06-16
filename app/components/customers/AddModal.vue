<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  name: z.string().min(2, "太短"),
  email: z.string().email("邮箱格式不正确"),
});
const open = ref(false);

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: "",
  email: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "成功",
    description: `新客户 ${event.data.name} 已添加`,
    color: "success",
  });
  open.value = false;
}
</script>

<template>
  <UModal v-model:open="open" title="新客户" description="向数据库添加一位新客户">
    <UButton label="新客户" icon="i-lucide-plus" />

    <template #body>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormField label="姓名" placeholder="张三" name="name">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>
        <UFormField label="邮箱" placeholder="zhangsan@example.com" name="email">
          <UInput v-model="state.email" class="w-full" />
        </UFormField>
        <div class="flex justify-end gap-2">
          <UButton label="取消" color="neutral" variant="subtle" @click="open = false" />
          <UButton label="创建" color="primary" variant="solid" type="submit" />
        </div>
      </UForm>
    </template>
  </UModal>
</template>
