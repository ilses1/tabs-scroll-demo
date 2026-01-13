# Tabs 滚动 Demo

一个包含 Tabs 与内容区域联动的滚动示例，支持点击 Tab 平滑滚动到对应区域、手动滚动时自动切换高亮、顶部吸顶阴影与实时时间展示。

## 功能特性
- 点击 Tab 平滑滚动到对应内容区
- 手动滚动时根据“可见高度最大”的内容区自动切换 Tab
- 顶部容器吸顶并在滚动时显示阴影
- 顶部横幅展示当前时间（每秒刷新）
- 内容区统一高度为 500px，样式使用 Less

## 技术栈
- React 18 + TypeScript
- Vite 5
- Ant Design Tabs
- Less 与 Tailwind（仅少量示例样式）

## 本地运行
- 安装依赖：`npm install`
- 开发调试：`npm run dev`
- 生产构建：`npm run build`
- 本地预览：`npm run preview`

## 目录结构
- `src/App.tsx`：页面逻辑与滚动联动
- `src/App.module.less`：页面样式与布局
- `src/components/section1.tsx` 至 `section7.tsx`：各内容分区组件

## 说明
- 未配置 ESLint，如需代码检查可后续添加配置再启用 `lint` 脚本

