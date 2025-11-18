'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface MermaidViewerProps {
  content: string;
}

let mermaidInitialized = false;
let renderCounter = 0;

export function MermaidViewer({ content }: MermaidViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        themeVariables: {
          primaryColor: '#E6F0FF',
          primaryTextColor: '#0B0F17',
          primaryBorderColor: '#0F60FF',
          lineColor: '#173F73',
          secondaryColor: '#F9FAFB',
          tertiaryColor: '#E6F0FF',
          fontSize: '18px',
        },
        flowchart: {
          curve: 'basis',
          padding: 20,
          nodeSpacing: 80,
          rankSpacing: 80,
        },
      });
      mermaidInitialized = true;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !content || !mermaidInitialized) return;

    const renderChart = async () => {
      try {
        if (!containerRef.current) return;

        containerRef.current.innerHTML = '';

        renderCounter++;
        const id = `mmd-${renderCounter}`;

        const tempDiv = document.createElement('div');
        tempDiv.className = 'mermaid';
        tempDiv.textContent = content.trim();

        if (containerRef.current) {
          containerRef.current.appendChild(tempDiv);
          await mermaid.run({ nodes: [tempDiv] });

          const svg = containerRef.current.querySelector('svg');
          if (svg) {
            svg.style.maxWidth = '100%';
            svg.style.height = 'auto';
            svg.style.minHeight = '500px';
          }
        }
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        console.error('Content:', content);
      }
    };

    renderChart();
  }, [content, mermaidInitialized]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full h-full">
      <div
        ref={wrapperRef}
        className="relative bg-white rounded-lg overflow-hidden"
        style={{ height: '600px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <div
            ref={containerRef}
            className="flex items-center justify-center p-12"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.3s ease',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={handleZoomIn}
            className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-neutral-background transition-colors shadow-sm"
            title="放大"
          >
            <ZoomIn className="w-5 h-5 text-neutral-text" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-neutral-background transition-colors shadow-sm"
            title="缩小"
          >
            <ZoomOut className="w-5 h-5 text-neutral-text" />
          </button>
          <button
            onClick={handleReset}
            className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-neutral-background transition-colors shadow-sm"
            title="重置"
          >
            <RotateCcw className="w-5 h-5 text-neutral-text" />
          </button>
        </div>
      </div>
    </div>
  );
}
