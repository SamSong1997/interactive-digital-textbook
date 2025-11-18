'use client';

import { useState } from 'react';
import { ChapterTree } from '@/components/chapter-tree';
import { ContentReader } from '@/components/content-reader';
import { SidebarResources } from '@/components/sidebar-resources';
import { bookData } from '@/lib/book-data';
import { chapterContents } from '@/lib/chapter-content';
import { chapter1Resources } from '@/lib/chapter-quiz-data';
import { PanelLeftClose, PanelLeft, PanelRightClose, PanelRight } from 'lucide-react';

export default function Home() {
  const [selectedChapterId, setSelectedChapterId] = useState('1-1');
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  const content = chapterContents[selectedChapterId] || `
# 章节内容

本章节内容正在准备中，敬请期待。

您可以选择以下已有内容的章节进行阅读：
- 1.1 什么是能源？
- 3.2 一光子换一电子：光伏基本原理
- 8.1 "氢"的身世：氢的基本特性与应用价值
- 11.1 移动电源霸主：锂离子电池
  `;

  // 获取当前章节的测试题目和资源
  const chapterResources = chapter1Resources[selectedChapterId] || {
    quizQuestions: [],
    resourceLinks: []
  };

  return (
    <div className="flex h-[calc(100vh-5rem)]" style={{ backgroundColor: 'var(--color-light)' }}>
      {/* 左侧目录 */}
      <aside
        className={`
          ${isLeftSidebarOpen ? 'w-80' : 'w-0'}
          flex-shrink-0 bg-white border-r border-neutral-border overflow-hidden transition-all duration-300 shadow-sm
        `}
      >
        {isLeftSidebarOpen && (
          <div className="h-full overflow-y-auto">
            <div className="p-6 border-b border-neutral-border bg-gradient-to-b from-brand-light/30 to-white">
              <h2 className="text-lg font-semibold text-brand-deep">目录</h2>
              <p className="text-xs text-neutral-text mt-1.5 font-light">{bookData.subtitle}</p>
            </div>
            <ChapterTree
              chapters={bookData.chapters}
              selectedId={selectedChapterId}
              onSelectChapter={setSelectedChapterId}
            />
          </div>
        )}
      </aside>

      {/* 主内容区域 */}
      <div className="flex-1 relative overflow-y-auto">
        {/* 左侧收缩按钮 */}
        <button
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          className="fixed left-4 top-24 z-10 w-12 h-12 bg-white rounded-xl border border-neutral-border flex items-center justify-center hover:bg-brand-light hover:border-brand-primary transition-all shadow-md hover:shadow-lg"
          style={{ left: isLeftSidebarOpen ? '19.5rem' : '1.5rem' }}
        >
          {isLeftSidebarOpen ? (
            <PanelLeftClose className="w-5 h-5 text-neutral-text" />
          ) : (
            <PanelLeft className="w-5 h-5 text-neutral-text" />
          )}
        </button>

        {/* 右侧收缩按钮 */}
        {chapterResources.quizQuestions.length > 0 && (
          <button
            onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
            className="fixed right-4 top-24 z-10 w-12 h-12 bg-white rounded-xl border border-neutral-border flex items-center justify-center hover:bg-brand-light hover:border-brand-primary transition-all shadow-md hover:shadow-lg"
            style={{ right: isRightSidebarOpen ? '19.5rem' : '1.5rem' }}
          >
            {isRightSidebarOpen ? (
              <PanelRightClose className="w-5 h-5 text-neutral-text" />
            ) : (
              <PanelRight className="w-5 h-5 text-neutral-text" />
            )}
          </button>
        )}

        <ContentReader content={content} />
      </div>

      {/* 右侧边栏 */}
      {chapterResources.quizQuestions.length > 0 && (
        <aside
          className={`
            ${isRightSidebarOpen ? 'w-80' : 'w-0'}
            flex-shrink-0 bg-white border-l border-neutral-border overflow-hidden transition-all duration-300 shadow-sm
          `}
        >
          {isRightSidebarOpen && (
            <div className="h-full overflow-y-auto p-6">
              <SidebarResources
                quizQuestions={chapterResources.quizQuestions}
                resourceLinks={chapterResources.resourceLinks}
              />
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
