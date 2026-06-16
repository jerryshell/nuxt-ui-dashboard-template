<script setup lang="ts">
import { getPaginationRowModel } from "@tanstack/table-core";
import type { ComputedRef } from "vue";
import type { User } from "~/types";

const table = useTemplateRef("table");

const { columns } = useCustomersColumns();

const columnFilters = ref([
  {
    id: "email",
    value: "",
  },
]);
const columnVisibility = ref();
const rowSelection = ref({ 1: true });

const { data, status } = await useFetch<User[]>("/api/customers", {
  lazy: true,
});

const statusFilter = ref("all");

const selectedCount: ComputedRef<number> = computed(
  () => table.value?.tableApi?.getFilteredSelectedRowModel().rows.length ?? 0,
);
const filteredCount: ComputedRef<number> = computed(
  () => table.value?.tableApi?.getFilteredRowModel().rows.length ?? 0,
);
const paginationState: ComputedRef<{ pageIndex: number; pageSize: number } | undefined> = computed(
  () => table.value?.tableApi?.getState().pagination,
);

const columnVisibilityItems: ComputedRef<any[]> = computed(() =>
  (table.value?.tableApi?.getAllColumns() ?? [])
    .filter((column: any) => column.getCanHide())
    .map((column: any) => ({
      label: columnLabels[column.id] ?? column.id.charAt(0).toUpperCase() + column.id.slice(1),
      type: "checkbox" as const,
      checked: column.getIsVisible(),
      onUpdateChecked(checked: boolean) {
        table.value?.tableApi?.getColumn(column.id)?.toggleVisibility(!!checked);
      },
      onSelect(e?: Event) {
        e?.preventDefault();
      },
    })),
);

function onPageChange(page: number) {
  table.value?.tableApi?.setPageIndex(page - 1);
}

watch(
  () => statusFilter.value,
  (newVal) => {
    const statusColumn = table.value?.tableApi?.getColumn("status");
    if (!statusColumn) return;
    statusColumn.setFilterValue(newVal === "all" ? undefined : newVal);
  },
);

const email = computed({
  get: (): string => {
    return (table.value?.tableApi?.getColumn("email")?.getFilterValue() as string) || "";
  },
  set: (value: string) => {
    table.value?.tableApi?.getColumn("email")?.setFilterValue(value || undefined);
  },
});

const pagination = ref({
  pageIndex: 0,
  pageSize: 10,
});
</script>

<template>
  <UDashboardPanel id="customers">
    <template #header>
      <UDashboardNavbar title="客户">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #right>
          <CustomersAddModal />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <div class="flex flex-wrap items-center justify-between gap-1.5">
        <UInput v-model="email" class="max-w-sm" icon="i-lucide-search" placeholder="筛选邮箱..." />

        <div class="flex flex-wrap items-center gap-1.5">
          <CustomersDeleteModal :count="selectedCount">
            <UButton
              v-if="selectedCount"
              label="删除"
              color="error"
              variant="subtle"
              icon="i-lucide-trash"
            >
              <template #trailing>
                <UKbd>{{ selectedCount }}</UKbd>
              </template>
            </UButton>
          </CustomersDeleteModal>

          <USelect
            v-model="statusFilter"
            :items="statusFilterItems"
            :ui="{
              trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
            }"
            placeholder="筛选状态"
            class="min-w-28"
          />
          <UDropdownMenu :items="columnVisibilityItems" :content="{ align: 'end' }">
            <UButton
              label="显示"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-settings-2"
            />
          </UDropdownMenu>
        </div>
      </div>

      <UTable
        ref="table"
        v-model:column-filters="columnFilters"
        v-model:column-visibility="columnVisibility"
        v-model:row-selection="rowSelection"
        v-model:pagination="pagination"
        :pagination-options="{
          getPaginationRowModel: getPaginationRowModel(),
        }"
        class="shrink-0"
        :data="data"
        :columns="columns"
        :loading="status === 'pending'"
        :ui="{
          base: 'table-fixed border-separate border-spacing-0',
          thead: '[&>tr]:bg-elevated/50 [&>tr]:after:content-none',
          tbody: '[&>tr]:last:[&>td]:border-b-0',
          th: 'py-2 first:rounded-l-lg last:rounded-r-lg border-y border-default first:border-l last:border-r',
          td: 'border-b border-default',
          separator: 'h-0',
        }"
      />

      <div class="flex items-center justify-between gap-3 border-t border-default pt-4 mt-auto">
        <div class="text-sm text-muted">{{ selectedCount }} / {{ filteredCount }} 行已选择</div>

        <div class="flex items-center gap-1.5">
          <UPagination
            :default-page="(paginationState?.pageIndex ?? 0) + 1"
            :items-per-page="paginationState?.pageSize"
            :total="filteredCount"
            @update:page="onPageChange"
          />
        </div>
      </div>
    </template>
  </UDashboardPanel>
</template>
