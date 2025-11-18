'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Map, AudioLines, Bot, FileText } from 'lucide-react';

const navItems = [
  { id: 'pdf', label: '版式阅读', href: '/pdf', icon: FileText },
  { id: 'book', label: '流式阅读', href: '/', icon: Book },
  { id: 'guide', label: '思维导图', href: '/guide', icon: Map },
  { id: 'audio', label: '音频课程', href: '/audio', icon: AudioLines },
  { id: 'ai', label: 'AI 工具包', href: '/ai', icon: Bot },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-neutral-border shadow-sm z-50">
      <div className="h-full px-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-deep to-brand-primary flex items-center justify-center shadow-md">
            <Book className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-brand-deep tracking-tight">新能源材料与装备</h1>
            <p className="text-xs text-neutral-text font-light">西安交通大学出版社 · 储能科学与工程系列</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all duration-300
                  ${isActive
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 font-medium'
                    : 'text-neutral-text hover:bg-neutral-background hover:text-brand-deep border border-transparent hover:border-neutral-border'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
