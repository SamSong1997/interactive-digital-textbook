'use client';

import { useState } from 'react';
import { MindmapViewer } from '@/components/mindmap-viewer';
import { mindmapChapters } from '@/lib/mindmap-data';

export default function GuidePage() {
  const [selectedChapter, setSelectedChapter] = useState(mindmapChapters[0]);

  return (
    <div className="h-[calc(100vh-4rem)] bg-neutral-background">
      <div className="h-full p-6">
        <div className="flex gap-4 h-full">
          <aside className="w-80 bg-white rounded-lg shadow-sm overflow-y-auto flex-shrink-0">
            <div className="p-6 border-b border-neutral-border bg-gradient-to-b from-brand-light/30 to-white">
              <h2 className="text-lg font-semibold text-brand-deep">目录</h2>
              <p className="text-xs text-neutral-text mt-1.5 font-light">储能科学与工程系列教材</p>
            </div>
            <div className="py-4 px-3">
              {mindmapChapters.map((chapter) => (
                <div key={chapter.id}>
                  <div
                    className={`
                      flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md transition-all
                      ${
                        selectedChapter.id === chapter.id
                          ? 'bg-brand-light text-brand-primary font-medium'
                          : 'hover:bg-neutral-background'
                      }
                    `}
                    onClick={() => setSelectedChapter(chapter)}
                  >
                    <div className="w-4" />
                    <span className="text-sm flex-1">{chapter.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg font-semibold text-neutral-dark">
                {selectedChapter.title}
              </h2>
              <p className="text-sm text-neutral-text mt-1">
                通过思维导图快速了解本章节的知识体系
              </p>
            </div>
            <div className="flex-1 bg-white relative overflow-hidden">
              <MindmapViewer markdown={selectedChapter.markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
