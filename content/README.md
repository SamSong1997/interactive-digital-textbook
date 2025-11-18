# 内容文件说明

本文件夹存放教材的 Markdown 内容文件。

## 文件命名规范

- 章节内容：`chapter-{章节号}-{小节号}.md`
- 例如：
  - `chapter-1-1.md` → 第1章第1节
  - `chapter-3-2.md` → 第3章第2节

## 图片引用

图片存放在 `public/images/chapters/` 目录下，在 Markdown 中引用时使用相对路径：

```markdown
![图片描述](/images/chapters/chapter-1/example.png)
```

## 数学公式

支持 LaTeX 数学公式：

- 行内公式：`$E = mc^2$`
- 独立公式：`$$E = mc^2$$`

## 更新内容

修改 Markdown 文件后，需要在 `lib/chapter-content.ts` 中更新对应的内容索引。
