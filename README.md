# 📚 Interactive Digital Textbook - 交互式数字教材

一个现代化的交互式数字教材平台，专为《新能源材料与装备》课程设计。结合了流式阅读、音频课程、动态可视化等多种学习方式，提供沉浸式的学习体验。

## ✨ 核心功能

### 📖 流式阅读
- **优雅的排版设计**：采用 Lora 衬线字体，20px 字号，1.8 行高，提供舒适的阅读体验
- **温暖的视觉风格**：米黄色背景，减少视觉疲劳
- **丰富的内容支持**：支持 Markdown、数学公式（KaTeX）、表格、图片等
- **响应式布局**：适配不同屏幕尺寸

### 🎧 音频课程
- **真实音频播放**：集成第一章完整音频讲解（6分12秒）
- **播放控制**：支持播放/暂停、进度拖动、播放速度调节（0.5x-2.0x）
- **音量控制**：可调节音量大小
- **动态同步**：音频播放时自动切换对应的知识图谱

### 📊 动态知识图谱
- **Mermaid 可视化**：使用 Mermaid 图表展示知识结构
- **时间轴同步**：根据音频播放进度自动切换图表（12个关键节点）
- **交互式导航**：点击目录快速跳转到不同章节

### 🎨 视觉设计
- **品牌色系**：基于 Anthropic 设计规范
  - 主色调：深灰 (#141413)
  - 强调色：橙色 (#d97757)
  - 辅助色：蓝色 (#6a9bcc)、绿色 (#788c5d)
- **字体系统**：
  - 标题：Poppins（无衬线）
  - 正文：Lora（衬线）
  - 代码：Fira Code（等宽）

## 🚀 快速开始

### 环境要求
- Node.js 16.x 或更高版本
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本
```bash
npm run build
npm start
```

## 📁 项目结构

```
interactive-digital-textbook/
├── app/                          # Next.js 13 App Router
│   ├── page.tsx                  # 首页（流式阅读）
│   ├── audio/                    # 音频课程页面
│   ├── layout.tsx                # 全局布局
│   └── globals.css               # 全局样式
├── components/                   # React 组件
│   ├── content-reader.tsx        # 流式阅读组件
│   ├── audio-player.tsx          # 音频播放器
│   ├── mermaid-viewer.tsx        # Mermaid 图表查看器
│   └── sidebar.tsx               # 侧边栏导航
├── lib/                          # 工具库和数据
│   ├── chapter-content.ts        # 章节内容管理
│   └── mermaid-data.ts           # Mermaid 时间轴数据
├── content/                      # 教材内容
│   └── chapters/                 # 各章节 Markdown 文件
├── public/                       # 静态资源
│   ├── images/                   # 图片资源
│   │   └── chapter1/             # 第一章图片（13张）
│   └── 音频资源/                  # 音频文件
│       └── 第一章音频课程.mp3
└── docs/                         # 文档
```

## 🎯 功能特性

### 第一章：能源的前世今生
- ✅ 完整的 Markdown 内容（578行）
- ✅ 13 张配图（能量转换、历史演变、数据图表等）
- ✅ 6分12秒音频讲解
- ✅ 12 个关键知识点的动态 Mermaid 图谱：
  - 能源的本质（太阳能的变形）
  - 薪柴时期（钻木取火）
  - 水力与风力时代
  - 煤炭时代（18世纪转折）
  - 石油与天然气
  - 能源的不可能三角
  - 第四次能源革命（双碳战略）
  - 材料与装备的关键作用
  - 能源互联网
  - 从钻木取火到人造太阳
  - 总结：材料改变世界

## 🛠️ 技术栈

- **框架**：Next.js 13 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS + CSS Variables
- **Markdown**：react-markdown + remark/rehype 插件
- **数学公式**：KaTeX
- **图表**：Mermaid
- **字体**：Google Fonts (Poppins, Lora)

## 📝 内容管理

### 添加新章节
1. 在 `content/chapters/` 创建新的 Markdown 文件
2. 在 `lib/chapter-content.ts` 中注册章节
3. 如有图片，放置在 `public/images/chapterX/` 目录
4. 如有音频，放置在 `public/音频资源/` 目录
5. 在 `lib/mermaid-data.ts` 中配置时间轴数据

### 图片命名规范
- 使用英文命名：`fig-X-Y.png`（X为章节号，Y为图片序号）
- 放置在对应章节目录：`public/images/chapterX/`
- Markdown 中引用：`![描述](/images/chapterX/fig-X-Y.png)`

## 🎨 设计规范

### 颜色变量
```css
--color-dark: #141413;        /* 主文本色 */
--color-light: #faf9f5;       /* 背景色 */
--color-beige: #faf8f3;       /* 阅读区背景 */
--color-orange: #d97757;      /* 强调色 */
--color-blue: #6a9bcc;        /* 链接色 */
--color-green: #788c5d;       /* 标签色 */
```

### 字体规范
- 标题：Poppins, 700 weight
- 正文：Lora, 400 weight, 20px, 1.8 line-height
- 代码：Fira Code, monospace

## 📄 许可证

本项目仅供教育和学习使用。

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过 GitHub Issues 联系。

---

**西安交通大学 - 储能科学与工程系列教材**  
*《新能源材料与装备》数字化教学平台*
