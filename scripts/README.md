# 内容处理脚本工具

本文件夹包含用于处理教材 Markdown 内容的脚本工具。

## 📁 文件说明

- `fix-markdown-headers.js` - Markdown 标题层级修复工具
- `split-chapter.js` - 章节分割工具
- `README.md` - 本说明文档

## 🚀 使用流程

### 步骤 1: 修复 Markdown 标题层级

```bash
node scripts/fix-markdown-headers.js content/chapters/chapter1 content/chapters/chapter1-fixed.md
```

**功能说明：**
- 自动修复标题层级问题
- 确保章节标题使用正确的 `#` 数量
- 输出修复后的文件

**修复规则：**
- `第X章 xxx` → `## 第X章 xxx` (二级标题)
- `X.X xxx` → `## X.X xxx` (二级标题)
- `X.X.X xxx` → `### X.X.X xxx` (三级标题)
- `(1) xxx` → `### (1) xxx` (三级标题)
- `前言`、`第X篇` → `# xxx` (一级标题)

### 步骤 2: 分割章节内容

```bash
node scripts/split-chapter.js content/chapters/chapter1-fixed.md 1
```

**功能说明：**
- 将完整章节按小节分割
- 生成可直接用于 `lib/chapter-content.ts` 的代码
- 输出到 `scripts/chapter-X-content.ts`

**参数说明：**
- 第一个参数：修复后的 Markdown 文件路径
- 第二个参数：章节号（如 1, 2, 3...）

### 步骤 3: 更新 chapter-content.ts

1. 打开生成的文件 `scripts/chapter-X-content.ts`
2. 复制其中的内容
3. 粘贴到 `lib/chapter-content.ts` 中对应的位置

## 📝 示例

### 完整处理第 1 章

```bash
# 1. 修复标题层级
node scripts/fix-markdown-headers.js content/chapters/chapter1 content/chapters/chapter1-fixed.md

# 2. 分割章节
node scripts/split-chapter.js content/chapters/chapter1-fixed.md 1

# 3. 查看生成的代码
cat scripts/chapter-1-content.ts

# 4. 手动复制到 lib/chapter-content.ts
```

## ⚠️ 注意事项

1. **备份原文件**：在处理前建议备份原始 Markdown 文件
2. **检查输出**：处理后请检查生成的文件，确保格式正确
3. **图片路径**：确保图片路径正确（应该是 `/images/xxx.jpg`）
4. **数学公式**：LaTeX 公式会被保留，前端会自动渲染

## 🔧 故障排除

### 问题：脚本无法运行

**解决方案：**
```bash
# 确保 Node.js 已安装
node --version

# 给脚本添加执行权限（macOS/Linux）
chmod +x scripts/*.js
```

### 问题：标题层级仍然不对

**解决方案：**
- 检查原始 Markdown 文件的标题格式
- 可能需要手动调整特殊情况
- 修改 `fix-markdown-headers.js` 中的规则

### 问题：生成的代码有语法错误

**解决方案：**
- 检查 Markdown 中是否有特殊字符（如反引号 \`）
- 脚本会自动转义，但某些情况可能需要手动处理

## 📚 批量处理

如果需要处理多个章节，可以创建一个批处理脚本：

```bash
#!/bin/bash
# batch-process.sh

for i in {1..14}; do
  echo "处理第 $i 章..."
  node scripts/fix-markdown-headers.js content/chapters/chapter$i content/chapters/chapter$i-fixed.md
  node scripts/split-chapter.js content/chapters/chapter$i-fixed.md $i
done

echo "全部处理完成！"
```

## 🤝 贡献

如果发现脚本有问题或需要改进，请：
1. 在项目中提 Issue
2. 或直接修改脚本并提交 Pull Request
