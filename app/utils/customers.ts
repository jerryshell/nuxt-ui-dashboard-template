import type { UserStatus } from "~/types";

type BadgeColor = "success" | "error" | "warning";

export const statusMeta: Record<UserStatus, { color: BadgeColor; label: string }> = {
  subscribed: { color: "success", label: "已订阅" },
  unsubscribed: { color: "error", label: "已取消订阅" },
  bounced: { color: "warning", label: "退信" },
};

export const statusFilterItems = [
  { label: "全部", value: "all" },
  { label: "已订阅", value: "subscribed" },
  { label: "已取消订阅", value: "unsubscribed" },
  { label: "退信", value: "bounced" },
];

export const columnLabels: Record<string, string> = {
  select: "选择",
  id: "ID",
  name: "姓名",
  email: "邮箱",
  location: "地区",
  status: "状态",
  actions: "操作",
};
