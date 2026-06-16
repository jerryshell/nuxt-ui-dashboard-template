# Nuxt UI Dashboard Template

基于 **Nuxt 4** 和 **Nuxt UI 4** 构建的专业管理后台模板。

## 特性

- **Nuxt UI 4**: 基于 Tailwind CSS 4 的组件库
- **深色/浅色模式**: 内置主题切换
- **数据可视化**: 使用 Unovis 图表库
- **数据表格**: 基于 TanStack Table
- **收件箱管理**
- **客户管理**
- **设置页面**: 通用、成员、通知、安全
- **TypeScript**: 全栈类型安全
- **API 路由**: Nitro server API
- **表单校验**: 基于 Zod

## 使用此模板初始化项目

```bash
# 浅克隆（只下载最新代码，不包含提交历史）
git clone --depth 1 https://github.com/jerryshell/nuxt-ui-dashboard-template.git my-project
cd my-project

# 删除原有 git 历史，建立自己的版本仓库
rm -rf .git
git init
git add .
git commit -m "初始化项目"

# 关联你的远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin master
```

## 技术栈

| 类别      | 技术                              |
| --------- | --------------------------------- |
| 框架      | Nuxt 4, Vue 3                     |
| UI        | Nuxt UI 4, Tailwind CSS 4         |
| 状态/工具 | VueUse, @vueuse/nuxt              |
| 图表      | Unovis (TS + Vue)                 |
| 表格      | TanStack Table                    |
| 图标      | Lucide, Simple Icons              |
| 校验      | Zod                               |
| 日期      | date-fns, @internationalized/date |
| Linter    | oxlint                            |
| Formatter | oxfmt                             |

## 目录结构

```
├── app/
│   ├── app.vue              # 应用入口
│   ├── assets/css/main.css  # 全局样式
│   ├── components/          # 公共组件
│   ├── composables/         # 组合式函数
│   ├── layouts/default.vue  # 默认布局（含侧边栏导航）
│   ├── pages/               # 页面
│   │   ├── index.vue        # 首页仪表盘
│   │   ├── customers.vue    # 客户管理
│   │   ├── inbox.vue        # 收件箱
│   │   └── settings/        # 设置（含子页面）
│   ├── types/               # TypeScript 类型定义
│   └── utils/               # 工具函数
├── server/
│   └── api/                 # Nitro API 路由
├── public/                  # 静态资源
├── nuxt.config.ts           # Nuxt 配置
├── package.json
└── tsconfig.json
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:3000` 即可看到后台界面。

## 常用命令

| 命令                | 说明                |
| ------------------- | ------------------- |
| `npm run dev`       | 启动开发服务器      |
| `npm run build`     | 构建生产版本        |
| `npm run preview`   | 预览生产构建        |
| `npm run lint`      | 代码检查（oxlint）  |
| `npm run format`    | 代码格式化（oxfmt） |
| `npm run typecheck` | TypeScript 类型检查 |

## 许可证

[MIT](LICENSE)
