'use client';

import { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { ZoomIn, ZoomOut, Maximize2, RotateCcw, Download } from 'lucide-react';

interface MindmapViewerProps {
  markdown: string;
}

export function MindmapViewer({ markdown }: MindmapViewerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const markmapRef = useRef<Markmap | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    const colors = [
      '#FF6B35',
      '#00BFA6',
      '#7C4DFF',
      '#FF5722',
      '#00ACC1',
      '#FFC107',
      '#E91E63',
      '#4CAF50',
      '#9C27B0',
      '#FF9800',
    ];
    const rootColor = '#0F60FF';

    const mm = Markmap.create(svgRef.current, {
      color: (node: any) => {
        if (node.depth === 0) return rootColor;
        return colors[node.state.id % colors.length];
      },
      paddingX: 20,
      duration: 300,
      spacingVertical: 10,
      spacingHorizontal: 60,
    }, root);

    markmapRef.current = mm;

    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `
      .markmap text {
        fill: #000000 !important;
        font-weight: 500;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .markmap-node circle {
        cursor: pointer;
      }
      .markmap-node > line {
        stroke-width: 2px;
      }
    `;

    svgRef.current.appendChild(style);

    return () => {
      mm?.destroy();
    };
  }, [markdown]);

  const handleZoomIn = () => {
    markmapRef.current?.rescale(1.2);
  };

  const handleZoomOut = () => {
    markmapRef.current?.rescale(0.8);
  };

  const handleReset = () => {
    markmapRef.current?.fit();
  };

  const handleFullscreen = () => {
    if (svgRef.current?.parentElement) {
      svgRef.current.parentElement.requestFullscreen();
    }
  };

  const handleExportPNG = async () => {
    if (!svgRef.current) return;

    try {
      const svg = svgRef.current;
      const bbox = svg.getBBox();

      if (!bbox || bbox.width === 0 || bbox.height === 0) {
        console.error('Invalid SVG bounding box');
        return;
      }

      const padding = 40;

      const svgClone = svg.cloneNode(true) as SVGSVGElement;
      svgClone.setAttribute('width', (bbox.width + padding * 2).toString());
      svgClone.setAttribute('height', (bbox.height + padding * 2).toString());
      svgClone.setAttribute('viewBox', `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`);
      svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const svgString = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      // 直接导出 SVG 格式，避免 canvas 跨域问题
      const link = document.createElement('a');
      link.download = `mindmap-${Date.now()}.svg`;
      link.href = url;
      link.click();
      
      // 延迟释放 URL，确保下载完成
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  const buttonClass = "w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all shadow-lg";
  const iconClass = "w-5 h-5 text-gray-700";

  return (
    <div className="absolute inset-0">
      <svg ref={svgRef} className="w-full h-full" />

      <div className="absolute bottom-6 right-6 flex gap-2 z-50">
        <button
          onClick={handleZoomIn}
          className={buttonClass}
          title="放大"
        >
          <ZoomIn className={iconClass} />
        </button>
        <button
          onClick={handleZoomOut}
          className={buttonClass}
          title="缩小"
        >
          <ZoomOut className={iconClass} />
        </button>
        <button
          onClick={handleReset}
          className={buttonClass}
          title="重置"
        >
          <RotateCcw className={iconClass} />
        </button>
        <button
          onClick={handleExportPNG}
          className={buttonClass}
          title="导出PNG"
        >
          <Download className={iconClass} />
        </button>
        <button
          onClick={handleFullscreen}
          className={buttonClass}
          title="全屏"
        >
          <Maximize2 className={iconClass} />
        </button>
      </div>
    </div>
  );
}
