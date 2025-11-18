#!/usr/bin/env node

/**
 * 自动更新 chapter-content.ts 工具
 * 
 * 功能：
 * 读取生成的章节内容并自动更新到 lib/chapter-content.ts
 * 
 * 使用方法：
 * node scripts/update-chapter-content.js <chapter-number>
 * 
 * 示例：
 * node scripts/update-chapter-content.js 1
 */

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('错误：缺少参数');
  console.log('使用方法：node scripts/update-chapter-content.js <chapter-number>');
  process.exit(1);
}

const chapterNumber = args[0];
const generatedFile = `scripts/chapter-${chapterNumber}-content.ts`;
const targetFile = 'lib/chapter-content.ts';

// 检查文件是否存在
if (!fs.existsSync(generatedFile)) {
  console.error(`错误：生成的文件不存在: ${generatedFile}`);
  console.error('请先运行 split-chapter.js 生成内容');
  process.exit(1);
}

if (!fs.existsSync(targetFile)) {
  console.error(`错误：目标文件不存在: ${targetFile}`);
  process.exit(1);
}

console.log(`开始更新第 ${chapterNumber} 章内容到 ${targetFile}...`);

// 读取生成的内容
const generatedContent = fs.readFileSync(generatedFile, 'utf-8');

// 读取目标文件
const targetContent = fs.readFileSync(targetFile, 'utf-8');

// 解析生成的内容，提取各个小节
const sectionPattern = /'(\d+-\d+)':\s*`([\s\S]*?)`,\s*\n/g;
const sections = {};
let match;

while ((match = sectionPattern.exec(generatedContent)) !== null) {
  const [, id, content] = match;
  sections[id] = content.trim();
}

console.log(`找到 ${Object.keys(sections).length} 个小节`);

// 更新目标文件中的内容
let updatedContent = targetContent;

Object.entries(sections).forEach(([id, content]) => {
  console.log(`  更新 ${id}...`);
  
  // 查找并替换对应的小节内容
  // 匹配模式: '1-1': `...内容...`,
  const pattern = new RegExp(
    `'${id}':\\s*\`[\\s\\S]*?\`,`,
    'g'
  );
  
  const replacement = `'${id}': \`\n${content}\n\`,`;
  
  if (pattern.test(updatedContent)) {
    updatedContent = updatedContent.replace(pattern, replacement);
    console.log(`    ✓ ${id} 已更新`);
  } else {
    console.log(`    ⚠ ${id} 未找到，将添加到文件末尾`);
    // 在最后一个 } 之前添加
    const lastBrace = updatedContent.lastIndexOf('};');
    if (lastBrace !== -1) {
      updatedContent = 
        updatedContent.slice(0, lastBrace) +
        `  ${replacement}\n` +
        updatedContent.slice(lastBrace);
    }
  }
});

// 写入更新后的内容
fs.writeFileSync(targetFile, updatedContent, 'utf-8');

console.log(`\n✓ 更新完成！`);
console.log(`  已更新 ${Object.keys(sections).length} 个小节到 ${targetFile}`);
