'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import zh_CN from '@react-pdf-viewer/locales/lib/zh_CN.json';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PDFReader() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [defaultTabs[0], defaultTabs[1]],
  });
  const pdfFile = '/PDF/sample.pdf';

  return (
    <div className="h-[calc(100vh-5rem)] bg-neutral-background">
      <style jsx global>{`
        button[aria-label*="下载"],
        button[aria-label*="Download"],
        button[aria-label*="打印"],
        button[aria-label*="Print"],
        [role="menuitem"][aria-label*="下载"],
        [role="menuitem"][aria-label*="Download"],
        [role="menuitem"][aria-label*="打印"],
        [role="menuitem"][aria-label*="Print"] {
          display: none !important;
        }
      `}</style>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="h-full">
          <Viewer 
            fileUrl={pdfFile} 
            plugins={[defaultLayoutPluginInstance]}
            localization={zh_CN}
          />
        </div>
      </Worker>
    </div>
  );
}
