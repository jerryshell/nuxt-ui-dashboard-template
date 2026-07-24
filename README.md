# Nuxt UI Dashboard Template

基于 **Nuxt 4** 和 **Nuxt UI 4** 构建的管理后台模板。

## 特性

- Nuxt UI 4 + Tailwind CSS 4 组件库
- 深色/浅色模式与可配置主题（`app.config.ts`）
- 404 错误页（已做中文本地化）
- 数据可视化（Unovis）、数据表格（TanStack Table）
- 表单校验（Zod）、全栈 TypeScript
- 可编译为独立二进制（零运行时依赖，支持 Linux glibc/musl 交叉编译）

## 快速开始

### 基于此模板创建新项目

```bash
# 克隆模板（浅克隆，只取最新一次提交）
git clone --depth 1 https://github.com/jerryshell/nuxt-ui-dashboard-template.git my-project
cd my-project
# 移除原 .git 初始化为独立仓库
rm -rf .git && git init && git add . && git commit -m "init"
# 关联到自己的远程仓库并推送
git remote add origin https://github.com/用户名/仓库名.git
git push -u origin master
```

### 本地开发

```bash
bun install
bun run dev
```

访问 http://localhost:3000

## 技术栈

| 类别   | 技术                      |
| ------ | ------------------------- |
| 框架   | Nuxt 4, Vue 3             |
| UI     | Nuxt UI 4, Tailwind CSS 4 |
| 工具   | VueUse (@vueuse/nuxt)     |
| 图表   | @unovis/vue               |
| 表格   | @tanstack/table-core      |
| 图标   | Lucide                    |
| 校验   | Zod                       |
| 日期   | @internationalized/date   |
| Lint   | oxlint                    |
| Format | oxfmt                     |

## 目录结构

```
app/
├── app.config.ts        # 主题配色
├── app.vue              # 应用入口
├── error.vue            # 错误页（404）
├── assets/css/main.css  # 全局样式
├── components/          # 公共组件
│   ├── customers/       # 客户表格列等
│   ├── home/            # 首页图表
│   ├── inbox/           # 收件箱
│   ├── settings/        # 设置页相关
│   ├── NotificationsSlideover.vue
│   ├── TeamsMenu.vue
│   └── UserMenu.vue
├── composables/         # 组合式函数
│   ├── useDashboard.ts
│   └── useCustomersColumns.ts
├── layouts/default.vue  # 默认布局（侧边栏导航）
├── pages/               # 页面
│   ├── index.vue        # 首页
│   ├── customers.vue    # 客户
│   ├── inbox.vue        # 收件箱
│   ├── settings.vue     # 设置入口
│   └── settings/        # 设置子路由
│       ├── index.vue
│       ├── security.vue
│       ├── notifications.vue
│       └── members.vue
├── types/index.d.ts     # 类型定义
└── utils/               # 工具函数
    ├── index.ts
    └── customers.ts
shared/utils/            # 前后端共享工具
server/api/              # Nitro API 路由
public/                  # 静态资源
nuxt.config.ts
tsconfig.json
```

## 常用命令

| 命令                | 说明         |
| ------------------- | ------------ |
| `bun run dev`       | 开发服务器   |
| `bun run build`     | 生产构建     |
| `bun run preview`   | 预览构建     |
| `bun run lint`      | oxlint 检查  |
| `bun run format`    | oxfmt 格式化 |
| `bun run typecheck` | 类型检查     |
| `bun run build:bin` | 构建二进制   |
| `bun run start:bin` | 运行二进制   |

## 构建为独立二进制

可把应用编译成单一可执行二进制（无需 node_modules / Node 运行时）。
通过 `nuxt.config.ts` 的 nitro 配置实现，零额外依赖（等价于 nuxt-bun-compile 模块）。

> 前置：Bun 1.3.9+

### 命令

| 命令                           | 说明                                            |
| ------------------------------ | ----------------------------------------------- |
| `bun run build:bin`            | 构建当前平台二进制（`nuxtbin`）                 |
| `bun run build:bin:linux`      | 构建 glibc 二进制（`nuxtbin-linux`）            |
| `bun run build:bin:linux-musl` | 构建 Alpine/musl 二进制（`nuxtbin-linux-musl`） |
| `bun run start:bin`            | 运行 `./nuxtbin`                                |

### 一次构建多个 target

先 `build:bun`（仅 nuxt build），再复用 `.output` 产出多个二进制：

```bash
bun run build:bun
bun run compile:linux
bun run compile:linux-musl
```

### 部署注意

- **glibc** 二进制在 Debian/Ubuntu 等开箱即用（系统自带 libstdc++/libgcc）
- **musl** 二进制在 Alpine 需额外 `apk add libstdc++ libgcc`
- dev 模式不受影响（配置仅在 bun runtime + 非 dev 时启用）
- **老 CPU 兼容**：部署到 2013 年前、无 AVX2 的 CPU 出现 `Illegal instruction` 时，改用 baseline 变体（如 `bun-linux-x64-baseline`）
- **`.env` 自动加载**：二进制运行时会自动读取运行目录的 `.env`；若需确定性行为，compile 时加 `--no-compile-autoload-dotenv`

## 许可证

[MIT](LICENSE)
