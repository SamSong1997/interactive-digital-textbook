import './globals.css';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import { TopNav } from '@/components/top-nav';

const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: '数字教材 - 新能源材料与装备',
  description: '西安交通大学储能科学与工程系列教材',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={lora.className}>
        <TopNav />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
