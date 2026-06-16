import { sub } from "date-fns";

const notifications = [
  {
    id: 1,
    unread: true,
    sender: {
      name: "乔丹·布朗",
      email: "jordan.brown@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=2",
      },
    },
    body: "给您发送了一条消息",
    date: sub(new Date(), { minutes: 7 }).toISOString(),
  },
  {
    id: 2,
    sender: {
      name: "林赛·沃尔顿",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { hours: 1 }).toISOString(),
  },
  {
    id: 3,
    unread: true,
    sender: {
      name: "泰勒·格林",
      email: "taylor.green@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=3",
      },
    },
    body: "给您发送了一条消息",
    date: sub(new Date(), { hours: 3 }).toISOString(),
  },
  {
    id: 4,
    sender: {
      name: "考特尼·亨利",
      avatar: {
        src: "https://i.pravatar.cc/128?u=4",
      },
    },
    body: "将您添加到了一个项目",
    date: sub(new Date(), { hours: 3 }).toISOString(),
  },
  {
    id: 5,
    sender: {
      name: "汤姆·库克",
      avatar: {
        src: "https://i.pravatar.cc/128?u=5",
      },
    },
    body: "放弃了购物车",
    date: sub(new Date(), { hours: 7 }).toISOString(),
  },
  {
    id: 6,
    sender: {
      name: "凯西·托马斯",
      avatar: {
        src: "https://i.pravatar.cc/128?u=6",
      },
    },
    body: "购买了您的产品",
    date: sub(new Date(), { days: 1, hours: 3 }).toISOString(),
  },
  {
    id: 7,
    unread: true,
    sender: {
      name: "凯莉·威尔逊",
      email: "kelly.wilson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=8",
      },
    },
    body: "给您发送了一条消息",
    date: sub(new Date(), { days: 2 }).toISOString(),
  },
  {
    id: 8,
    sender: {
      name: "杰米·约翰逊",
      email: "jamie.johnson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=9",
      },
    },
    body: "申请了退款",
    date: sub(new Date(), { days: 5, hours: 4 }).toISOString(),
  },
  {
    id: 9,
    unread: true,
    sender: {
      name: "摩根·安德森",
      email: "morgan.anderson@example.com",
    },
    body: "给您发送了一条消息",
    date: sub(new Date(), { days: 6 }).toISOString(),
  },
  {
    id: 10,
    sender: {
      name: "德鲁·摩尔",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 6 }).toISOString(),
  },
  {
    id: 11,
    sender: {
      name: "莱利·戴维斯",
    },
    body: "放弃了购物车",
    date: sub(new Date(), { days: 7 }).toISOString(),
  },
  {
    id: 12,
    sender: {
      name: "乔丹·泰勒",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 9 }).toISOString(),
  },
  {
    id: 13,
    sender: {
      name: "凯莉·威尔逊",
      email: "kelly.wilson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=8",
      },
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 10 }).toISOString(),
  },
  {
    id: 14,
    sender: {
      name: "杰米·约翰逊",
      email: "jamie.johnson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=9",
      },
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 11 }).toISOString(),
  },
  {
    id: 15,
    sender: {
      name: "摩根·安德森",
    },
    body: "购买了您的产品",
    date: sub(new Date(), { days: 12 }).toISOString(),
  },
  {
    id: 16,
    sender: {
      name: "德鲁·摩尔",
      avatar: {
        src: "https://i.pravatar.cc/128?u=16",
      },
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 13 }).toISOString(),
  },
  {
    id: 17,
    sender: {
      name: "莱利·戴维斯",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 14 }).toISOString(),
  },
  {
    id: 18,
    sender: {
      name: "乔丹·泰勒",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 15 }).toISOString(),
  },
  {
    id: 19,
    sender: {
      name: "凯莉·威尔逊",
      email: "kelly.wilson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=8",
      },
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 16 }).toISOString(),
  },
  {
    id: 20,
    sender: {
      name: "杰米·约翰逊",
      email: "jamie.johnson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=9",
      },
    },
    body: "购买了您的产品",
    date: sub(new Date(), { days: 17 }).toISOString(),
  },
  {
    id: 21,
    sender: {
      name: "摩根·安德森",
    },
    body: "放弃了购物车",
    date: sub(new Date(), { days: 17 }).toISOString(),
  },
  {
    id: 22,
    sender: {
      name: "德鲁·摩尔",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 18 }).toISOString(),
  },
  {
    id: 23,
    sender: {
      name: "莱利·戴维斯",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 19 }).toISOString(),
  },
  {
    id: 24,
    sender: {
      name: "乔丹·泰勒",
      avatar: {
        src: "https://i.pravatar.cc/128?u=24",
      },
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 20 }).toISOString(),
  },
  {
    id: 25,
    sender: {
      name: "凯莉·威尔逊",
      email: "kelly.wilson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=8",
      },
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 20 }).toISOString(),
  },
  {
    id: 26,
    sender: {
      name: "杰米·约翰逊",
      email: "jamie.johnson@example.com",
      avatar: {
        src: "https://i.pravatar.cc/128?u=9",
      },
    },
    body: "放弃了购物车",
    date: sub(new Date(), { days: 21 }).toISOString(),
  },
  {
    id: 27,
    sender: {
      name: "摩根·安德森",
    },
    body: "订阅了您的邮件列表",
    date: sub(new Date(), { days: 22 }).toISOString(),
  },
];

export default eventHandler(async () => {
  return notifications;
});
