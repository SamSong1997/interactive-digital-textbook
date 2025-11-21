# 更新日志 (Changelog)

## 2024-11-21 - 音频课程功能上线

### 🎉 新增功能

#### 1. 音频课程系统
- **真实音频播放**：集成第一章完整音频讲解（6分12秒）
  - 文件位置：`public/音频资源/第一章音频课程.mp3`
  - 支持播放/暂停控制
  - 支持进度条拖动跳转
  - 支持播放速度调节（0.5x - 2.0x）
  - 支持音量控制

- **动态知识图谱同步**：音频播放时自动切换 Mermaid 图表
  - 12 个关键时间节点
  - 根据音频进度自动切换对应的知识结构图
  - 时间轴配置文件：`lib/mermaid-data.ts`

#### 2. 图片资源管理
- **标准化图片路径**：
  - 新建目录：`public/images/chapter1/`
  - 图片命名规范：`fig-1-1.png` ~ `fig-1-13.png`
  - 共 13 张第一章配图
  
- **Markdown 图片引用**：
  - 格式：`![描述](/images/chapter1/fig-1-X.png)`
  - 所有图片路径已更新为标准格式

### 🎨 样式优化

#### 1. 流式阅读体验提升
- **背景色修复**：恢复米黄色背景 (`--color-beige: #faf8f3`)
- **字号增大**：正文从 18px 增加到 20px
- **字体优化**：确保使用衬线字体，提供更好的阅读体验
- **行高调整**：保持 1.8 行高，提供舒适的阅读间距

#### 2. 颜色系统完善
```css
--color-dark: #141413;        /* 主文本色 */
--color-light: #faf9f5;       /* 背景色 */
--color-beige: #faf8f3;       /* 阅读区背景 */
--color-orange: #d97757;      /* 强调色 */
--color-blue: #0F60FF;        /* 品牌蓝 */
--color-green: #788c5d;       /* 标签色 */
```

### 🐛 Bug 修复

#### 音频播放器进度条同步问题
**问题描述**：音频播放时有声音，但进度条不更新

**修复方案**：
- 将事件监听器回调函数移到 `useEffect` 内部
- 确保事件处理函数能访问最新的状态
- 修复了闭包导致的状态不同步问题

**修改文件**：`components/audio-player.tsx`

**关键代码变更**：
```typescript
// 修复前：事件处理函数在 useEffect 外部定义
useEffect(() => {
  audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
}, [audioSrc]);

const handleTimeUpdate = () => {
  // 这里访问的是旧的状态
};

// 修复后：事件处理函数在 useEffect 内部定义
useEffect(() => {
  const handleTimeUpdate = () => {
    // 这里能访问最新的状态
    const time = audio.currentTime;
    setCurrentTime(time);
    onTimeUpdate(time);
  };
  
  audio.addEventListener('timeupdate', handleTimeUpdate);
  
  return () => {
    audio.removeEventListener('timeupdate', handleTimeUpdate);
  };
}, [audioSrc, onTimeUpdate]);
```

### 📝 文档更新

#### README.md
- 添加完整的项目介绍
- 快速开始指南
- 项目结构说明
- 技术栈介绍
- 内容管理指南
- 设计规范文档

### 📂 文件结构变更

#### 新增文件
```
public/
├── images/
│   └── chapter1/
│       ├── fig-1-1.png
│       ├── fig-1-2.png
│       └── ... (共13张)
└── 音频资源/
    └── 第一章音频课程.mp3

README.md
CHANGELOG.md
```

#### 修改文件
```
app/audio/page.tsx              # 添加 audioSrc 属性
app/globals.css                 # 添加 --color-beige 变量
components/audio-player.tsx     # 集成真实音频播放 + 修复进度条
components/content-reader.tsx   # 字号增大到 20px，字体优化
content/chapters/chapter1-fixed.md  # 更新所有图片路径
lib/mermaid-data.ts            # 添加音频时间轴数据
```

### 🚀 部署说明

#### 同事如何同步代码

1. **拉取最新代码**
```bash
git pull origin main
```

2. **安装依赖**（如果有新增依赖）
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问应用**
- 主页（流式阅读）：http://localhost:3000
- 音频课程：http://localhost:3000/audio

#### 注意事项
- 音频文件较大（约 6MB），首次加载可能需要等待
- 图片资源已优化为标准路径，无需额外配置
- 确保浏览器支持 HTML5 Audio API

### 📊 数据统计

- **代码变更**：22 个文件，987 行新增，185 行删除
- **图片资源**：13 张 PNG 图片，总大小约 2.5MB
- **音频资源**：1 个 MP3 文件，时长 6分12秒，大小约 6MB
- **Mermaid 节点**：12 个关键时间点

### 🎯 下一步计划

- [ ] 添加更多章节的音频课程
- [ ] 优化音频加载性能（预加载、流式加载）
- [ ] 添加音频字幕功能
- [ ] 支持音频下载
- [ ] 添加学习进度记录

---

**提交记录**：
- `757df91` - feat: 添加音频课程功能和图片资源
- `3da6ba6` - docs: 添加项目 README 文档
- `0cd252f` - docs: 更新 README 设计说明
- `89073f9` - fix: 修复音频播放器进度条不更新的问题
