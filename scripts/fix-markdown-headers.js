#!/usr/bin/env node

/**
 * Markdown 标题层级修复工具
 * 
 * 功能：
 * 1. 修复 Markdown 文件中的标题层级问题
 * 2. 确保标题层级符合规范（# 一级, ## 二级, ### 三级）
 * 
 * 使用方法：
 * node scripts/fix-markdown-headers.js <input-file> <output-file>
 * 
 * 示例：
 * node scripts/fix-markdown-headers.js content/chapters/chapter1 content/chapters/chapter1-fixed.md
 */

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('错误：缺少参数');
  console.log('使用方法：node scripts/fix-markdown-headers.js <input-file> <output-file>');
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];

// 检查输入文件是否存在
if (!fs.existsSync(inputFile)) {
  console.error(`错误：输入文件不存在: ${inputFile}`);
  process.exit(1);
}

console.log(`开始处理文件: ${inputFile}`);

// 读取文件内容
const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n');

// 处理每一行
const fixedLines = lines.map((line, index) => {
  // 跳过非标题行
  if (!line.trim().startsWith('#')) {
    return line;
  }

  // 提取标题内容
  const match = line.match(/^(#+)\s+(.+)$/);
  if (!match) {
    return line;
  }

  const [, hashes, title] = match;
  const titleText = title.trim();

  // 规则1: 章节标题 (如 "第1章 xxx") 应该是二级标题 ##
  if (/^第\d+章/.test(titleText)) {
    return `## ${titleText}`;
  }

  // 规则2: 小节标题 (如 "1.1 xxx", "1.2 xxx") 应该是二级标题 ##
  if (/^\d+\.\d+\s+/.test(titleText) && !/^\d+\.\d+\.\d+/.test(titleText)) {
    return `## ${titleText}`;
  }

  // 规则3: 子小节标题 (如 "1.1.1 xxx", "1.2.3 xxx") 应该是三级标题 ###
  if (/^\d+\.\d+\.\d+\s+/.test(titleText)) {
    return `### ${titleText}`;
  }

  // 规则4: 纯数字标题 (如 "1. xxx", "2. xxx") 应该是三级标题 ###
  if (/^\d+\.\s+/.test(titleText) && !/^\d+\.\d+/.test(titleText)) {
    return `### ${titleText}`;
  }

  // 规则5: 括号开头的标题 (如 "(1) xxx") 应该是三级标题 ###
  if (/^\(\d+\)/.test(titleText)) {
    return `### ${titleText}`;
  }

  // 规则6: "前言"、"第X篇" 等应该是一级标题 #
  if (/^(前言|第.+篇)/.test(titleText)) {
    return `# ${titleText}`;
  }

  // 其他情况保持原样
  return line;
});

// 写入输出文件
const fixedContent = fixedLines.join('\n');
fs.writeFileSync(outputFile, fixedContent, 'utf-8');

console.log(`✓ 处理完成！`);
console.log(`  输入文件: ${inputFile}`);
console.log(`  输出文件: ${outputFile}`);
console.log(`  总行数: ${lines.length}`);

// 统计修改的标题数量
const changedLines = lines.filter((line, i) => line !== fixedLines[i] && line.trim().startsWith('#'));
console.log(`  修改的标题数: ${changedLines.length}`);
