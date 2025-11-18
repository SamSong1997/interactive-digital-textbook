'use client';

import { useState } from 'react';
import { AudioPlayer } from '@/components/audio-player';
import { MermaidViewer } from '@/components/mermaid-viewer';
import { mermaidData } from '@/lib/mermaid-data';

export default function AudioPage() {
  const [selectedChapter, setSelectedChapter] = useState(mermaidData[0]);
  const [currentTime, setCurrentTime] = useState(-1);

  const currentMermaid = selectedChapter.timeline.reduce((prev, curr) => {
    return currentTime >= curr.time ? curr : prev;
  }, selectedChapter.timeline[0]);

  return (
    <div className="h-[calc(100vh-4rem)] bg-neutral-background">
      <div className="h-full p-6 space-y-6">
        <div className="flex gap-4">
          <div className="w-80 bg-white rounded-lg shadow-sm overflow-y-auto">
            <div className="p-6 border-b border-neutral-border bg-gradient-to-b from-brand-light/30 to-white">
              <h2 className="text-lg font-semibold text-brand-deep">目录</h2>
              <p className="text-xs text-neutral-text mt-1.5 font-light">储能科学与工程系列教材</p>
            </div>
            <div className="py-4">
              {mermaidData.map((chapter) => (
                <div key={chapter.chapterId}>
                  <div
                    className={`
                      flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md transition-all mx-3
                      ${
                        selectedChapter.chapterId === chapter.chapterId
                          ? 'bg-brand-light text-brand-primary font-medium'
                          : 'hover:bg-neutral-background text-neutral-deep'
                      }
                    `}
                    onClick={() => {
                      setSelectedChapter(chapter);
                      setCurrentTime(-1);
                    }}
                  >
                    <span className="text-sm">{chapter.chapterTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <AudioPlayer
              chapterTitle={selectedChapter.chapterTitle}
              duration={selectedChapter.duration}
              onTimeUpdate={setCurrentTime}
            />

            <div className="bg-white rounded-lg shadow-sm">
              <MermaidViewer
                content={currentMermaid.content}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
