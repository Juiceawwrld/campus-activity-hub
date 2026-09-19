# 拾光 · 校园活动中心

一个以校园活动发现与提醒为主题的静态前端界面原型。项目采用简洁的桌面工作台布局，帮助学生快速浏览活动、查看重点通知和管理收藏。

## 功能概览

- 校园活动概览与重点活动展示
- 活动分类、搜索和快速筛选界面
- 活动时间、地点、来源和状态信息展示
- 收藏、提醒和活动详情抽屉的视觉入口
- 响应式布局，适配桌面端、平板和移动端屏幕

## 项目结构

```text
campus-activity-hub/
├── index.html       # GitHub Pages / 静态服务器入口
├── .gitignore       # 本地与构建产物忽略规则
├── src/
│   └── styles/
│       └── main.css # 全部页面样式与响应式规则
└── README.md        # 项目说明文档
```

## 本地运行

本项目目前是无构建步骤的静态页面，不需要安装依赖。

1. 克隆项目并进入目录：

   ```bash
   git clone https://github.com/Juiceawwrld/campus-activity-hub.git
   cd campus-activity-hub
   ```

2. 直接用浏览器打开 `index.html`，或使用任意静态文件服务器运行，例如：

   ```bash
   python -m http.server 8000
   ```

   然后访问 <http://localhost:8000>。

## 技术说明

- HTML5：页面语义结构与内容
- CSS3：布局、视觉系统、动效和响应式适配
- Google Fonts：DM Sans 与 Noto Sans SC

当前仓库聚焦于界面原型，活动数据和交互逻辑尚未接入后端或前端脚本。后续可以在 `src/` 下分别增加 `scripts/`、`data/` 等目录，继续扩展 JavaScript、数据模型和 API 请求模块。

## 许可证

暂未指定开源许可证。
