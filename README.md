# Tesla-Style Fan Store

特斯拉风格的极简主义电风扇产品展示官网

## 🎯 项目特点

- **特斯拉风格设计**: 极简主义美学，黑白灰配色，大图大字体
- **现代化技术栈**: React 18 + TypeScript + Vite + Tailwind CSS
- **流畅动画**: Framer Motion 提供丝滑的滚动和交互动画
- **响应式设计**: 完美适配桌面、平板和移动设备
- **智能表单**: React Hook Form + Zod 提供强大的表单验证
- **组件化架构**: 基于 Shadcn/UI 的可复用组件系统

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 http://localhost:5173 启动

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # 组件目录
│   ├── layout/         # 布局组件（导航栏、页脚等）
│   ├── ui/             # UI基础组件（按钮、卡片等）
│   ├── home/           # 首页专用组件
│   ├── products/       # 产品页组件
│   └── contact/        # 联系页组件
├── pages/              # 页面组件
├── data/               # 数据文件
├── types/              # TypeScript类型定义
├── lib/                # 工具函数
└── App.tsx             # 应用根组件
```

## 🎨 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: Shadcn/UI
- **动画**: Framer Motion
- **路由**: React Router v6
- **表单**: React Hook Form + Zod
- **图标**: Lucide React

## 📄 页面说明

### 首页 (/)
- Hero区域：全屏大标题展示
- 特性展示：6大核心卖点
- 产品预览：明星产品展示
- CTA区域：行动号召

### 产品页 (/products)
- 产品网格展示
- 分类筛选功能
- 产品详情弹窗

### 联系页 (/contact)
- 联系表单（带验证）
- 公司信息展示
- 社交媒体链接

## 🎯 设计理念

参考特斯拉官网的设计风格：
- 极简主义布局
- 大量留白
- 高质量图片
- 清晰的视觉层次
- 流畅的滚动体验
- 精致的动画效果

## 📱 响应式设计

- **移动端** (< 768px): 单列布局，汉堡菜单
- **平板** (768px - 1024px): 两列布局
- **桌面端** (> 1024px): 三列布局，全功能导航

## 🔧 环境要求

- Node.js 18+
- npm 9+ 或 yarn 1.22+

## 📝 许可证

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

---

**AeroBreeze** - 极简之风，科技重新定义清凉体验