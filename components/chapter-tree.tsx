'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Chapter } from '@/lib/book-data';

interface ChapterTreeProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
  selectedId?: string;
}

export function ChapterTree({ chapters, onSelectChapter, selectedId }: ChapterTreeProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['part-1', 'chapter-1']));

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderChapter = (chapter: Chapter, level: number = 0) => {
    const isExpanded = expandedIds.has(chapter.id);
    const isSelected = selectedId === chapter.id;
    const hasChildren = chapter.children && chapter.children.length > 0;

    return (
      <div key={chapter.id}>
        <div
          className={`
            flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md transition-all
            ${isSelected ? 'bg-brand-light text-brand-primary font-medium' : 'hover:bg-neutral-background'}
          `}
          style={{ paddingLeft: `${12 + level * 16}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(chapter.id);
            } else {
              onSelectChapter(chapter.id);
            }
          }}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(chapter.id);
              }}
              className="flex-shrink-0"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
          {!hasChildren && <div className="w-4" />}
          <span className="text-sm flex-1">{chapter.title}</span>
        </div>

        {hasChildren && isExpanded && (
          <div>
            {chapter.children!.map((child) => renderChapter(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-4">
      {chapters.map((chapter) => renderChapter(chapter))}
    </div>
  );
}
