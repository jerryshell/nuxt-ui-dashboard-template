import type { TableColumn } from "@nuxt/ui";
import type { Row } from "@tanstack/table-core";
import type { User } from "~/types";
import { statusMeta } from "~/utils/customers";

export function useCustomersColumns() {
  const UAvatar = resolveComponent("UAvatar");
  const UButton = resolveComponent("UButton");
  const UBadge = resolveComponent("UBadge");
  const UDropdownMenu = resolveComponent("UDropdownMenu");
  const UCheckbox = resolveComponent("UCheckbox");

  const toast = useToast();

  function getRowItems(row: Row<User>) {
    return [
      {
        type: "label",
        label: "操作",
      },
      {
        label: "复制客户 ID",
        icon: "i-lucide-copy",
        onSelect() {
          navigator.clipboard.writeText(row.original.id.toString());
          toast.add({
            title: "已复制到剪贴板",
            description: "客户 ID 已复制到剪贴板",
          });
        },
      },
      {
        type: "separator",
      },
      {
        label: "查看客户详情",
        icon: "i-lucide-list",
      },
      {
        label: "查看客户付款",
        icon: "i-lucide-wallet",
      },
      {
        type: "separator",
      },
      {
        label: "删除客户",
        icon: "i-lucide-trash",
        color: "error",
        onSelect() {
          toast.add({
            title: "客户已删除",
            description: "该客户已被删除。",
          });
        },
      },
    ];
  }

  const columns: TableColumn<User>[] = [
    {
      id: "select",
      header: ({ table }) =>
        h(UCheckbox, {
          modelValue: table.getIsSomePageRowsSelected()
            ? "indeterminate"
            : table.getIsAllPageRowsSelected(),
          "onUpdate:modelValue": (value: boolean | "indeterminate") =>
            table.toggleAllPageRowsSelected(!!value),
          ariaLabel: "全选",
        }),
      cell: ({ row }) =>
        h(UCheckbox, {
          modelValue: row.getIsSelected(),
          "onUpdate:modelValue": (value: boolean | "indeterminate") => row.toggleSelected(!!value),
          ariaLabel: "选择行",
        }),
    },
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "姓名",
      cell: ({ row }) => {
        return h("div", { class: "flex items-center gap-3" }, [
          h(UAvatar, {
            ...row.original.avatar,
            size: "lg",
          }),
          h("div", undefined, [
            h("p", { class: "font-medium text-highlighted" }, row.original.name),
            h("p", { class: "" }, `@${row.original.name}`),
          ]),
        ]);
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return h(UButton, {
          color: "neutral",
          variant: "ghost",
          label: "邮箱",
          icon: isSorted
            ? isSorted === "asc"
              ? "i-lucide-arrow-up-narrow-wide"
              : "i-lucide-arrow-down-wide-narrow"
            : "i-lucide-arrow-up-down",
          class: "-mx-2.5",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        });
      },
    },
    {
      accessorKey: "location",
      header: "地区",
      cell: ({ row }) => row.original.location,
    },
    {
      accessorKey: "status",
      header: "状态",
      filterFn: "equals",
      cell: ({ row }) => {
        const meta = statusMeta[row.original.status];
        return h(
          UBadge,
          { class: "capitalize", variant: "subtle", color: meta.color },
          () => meta.label,
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return h(
          "div",
          { class: "text-right" },
          h(
            UDropdownMenu,
            {
              content: {
                align: "end",
              },
              items: getRowItems(row),
            },
            () =>
              h(UButton, {
                icon: "i-lucide-ellipsis-vertical",
                color: "neutral",
                variant: "ghost",
                class: "ml-auto",
              }),
          ),
        );
      },
    },
  ];

  return { columns };
}
