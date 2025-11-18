#!/usr/bin/env node

/**
 * 章节分割工具
 * 
 * 功能：
 * 1. 将完整的章节 Markdown 文件按小节分割
 * 2. 自动更新到 lib/chapter-content.ts
 * 
 * 使用方法：
 * node scripts/split-chapter.js <chapter-file> <chapter-number>
 * 
 * 示例：
 * node scripts/split-chapter.js content/chapters/chapter1-fixed.md 1
 */

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('错误：缺少参数');
  console.log('使用方法：node scripts/split-chapter.js <chapter-file> <chapter-number>');
  process.exit(1);
}

const chapterFile = args[0];
const chapterNumber = args[1];

// 检查文件是否存在
if (!fs.existsSync(chapterFile)) {
  console.error(`错误：文件不存在: ${chapterFile}`);
  process.exit(1);
}

console.log(`开始处理第 ${chapterNumber} 章...`);

// 读取文件内容
const content = fs.readFileSync(chapterFile, 'utf-8');
const lines = content.split('\n');

// 查找各个小节的起始位置
const sections = [];
let currentSection = null;

lines.forEach((line, index) => {
  // 匹配小节标题 (如 "## 1.1 xxx", "## 1.2 xxx")
  const match = line.match(/^##\s+(\d+)\.(\d+)\s+(.+)$/);
  
  if (match) {
    const [, chapter, section, title] = match;
    
    // 只处理当前章节
    if (chapter === chapterNumber) {
      // 保存上一个小节
      if (currentSection) {
        currentSection.endLine = index - 1;
        sections.push(currentSection);
      }
      
      // 开始新小节
      currentSection = {
        id: `${chapter}-${section}`,
        title: `${chapter}.${section} ${title}`,
        startLine: index,
        endLine: null
      };
    }
  }
});

// 保存最后一个小节
if (currentSection) {
  currentSection.endLine = lines.length - 1;
  sections.push(currentSection);
}

console.log(`找到 ${sections.length} 个小节：`);
sections.forEach(s => {
  console.log(`  - ${s.id}: ${s.title} (行 ${s.startLine}-${s.endLine})`);
});

// 提取每个小节的内容
const sectionContents = {};
sections.forEach(section => {
  const sectionLines = lines.slice(section.startLine, section.endLine + 1);
  sectionContents[section.id] = sectionLines.join('\n').trim();
});

// 生成 TypeScript 代码
let tsCode = '';
Object.entries(sectionContents).forEach(([id, content]) => {
  // 转义反引号和 ${} 
  const escapedContent = content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  
  tsCode += `  '${id}': \`\n${escapedContent}\n\`,\n\n`;
});

// 输出到文件
const outputFile = `scripts/chapter-${chapterNumber}-content.ts`;
fs.writeFileSync(outputFile, tsCode, 'utf-8');

console.log(`\n✓ 处理完成！`);
console.log(`  生成的代码已保存到: ${outputFile}`);
console.log(`\n请手动将生成的代码复制到 lib/chapter-content.ts 中对应的位置。`);
