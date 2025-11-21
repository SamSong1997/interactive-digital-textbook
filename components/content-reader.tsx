'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

interface ContentReaderProps {
  content: string;
  chapterTitle?: string;
}

export function ContentReader({ content, chapterTitle }: ContentReaderProps) {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16 my-8 rounded-2xl shadow-sm" style={{ backgroundColor: 'var(--color-beige)' }}>
      {chapterTitle && (
        <h1 
          className="text-5xl font-bold mb-8 pb-5" 
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-dark)',
            borderBottom: '3px solid var(--color-orange)',
            letterSpacing: '-0.02em'
          }}
        >
          {chapterTitle}
        </h1>
      )}

      <article className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            h1: ({ children }) => (
              <h1 
                className="text-5xl font-bold mt-0 mb-8 pb-5"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-dark)',
                  borderBottom: '3px solid var(--color-orange)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 
                className="text-4xl font-semibold mt-20 mb-8 pb-3"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-dark)',
                  borderBottom: '2px solid var(--color-light-gray)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 
                className="text-3xl font-semibold mt-16 mb-6"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 
                className="text-2xl font-semibold mt-12 mb-5"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p 
                className="text-xl mb-8"
                style={{ 
                  fontFamily: 'Lora, Georgia, serif',
                  color: 'var(--color-dark)',
                  lineHeight: '1.8',
                  fontSize: '20px',
                  fontWeight: 400
                }}
              >
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul 
                className="list-disc list-inside space-y-3 mb-8 ml-6"
                style={{ 
                  fontFamily: 'Lora, Georgia, serif',
                  color: 'var(--color-dark)',
                  fontSize: '20px',
                  lineHeight: '1.8'
                }}
              >
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol 
                className="list-decimal list-inside space-y-3 mb-8 ml-6"
                style={{ 
                  fontFamily: 'Lora, Georgia, serif',
                  color: 'var(--color-dark)',
                  fontSize: '20px',
                  lineHeight: '1.8'
                }}
              >
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="ml-2 text-xl" style={{ lineHeight: '1.8', fontFamily: 'Lora, Georgia, serif' }}>{children}</li>
            ),
            strong: ({ children }) => (
              <strong 
                className="font-semibold"
                style={{ color: 'var(--color-dark)' }}
              >
                {children}
              </strong>
            ),
            blockquote: ({ children }) => (
              <blockquote 
                className="pl-8 pr-6 py-6 my-12 italic rounded-r-lg"
                style={{ 
                  borderLeft: '4px solid var(--color-orange)',
                  backgroundColor: 'var(--color-light-gray)',
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: '20px',
                  lineHeight: '1.8'
                }}
              >
                {children}
              </blockquote>
            ),
            code: ({ inline, children }: any) =>
              inline ? (
                <code 
                  className="px-2 py-1 rounded text-base"
                  style={{ 
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'var(--color-light-gray)',
                    fontSize: '0.9em'
                  }}
                >
                  {children}
                </code>
              ) : (
                <code 
                  className="block p-6 rounded-lg overflow-x-auto my-6"
                  style={{ 
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'var(--color-light-gray)'
                  }}
                >
                  {children}
                </code>
              ),
            a: ({ children, href }) => (
              <a 
                href={href}
                className="underline transition-colors duration-200"
                style={{ color: 'var(--color-blue)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-blue)'}
              >
                {children}
              </a>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-12 rounded-lg shadow-sm border border-gray-200">
                <table className="w-full border-collapse">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead style={{ backgroundColor: 'var(--color-orange)', color: 'white' }}>
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th 
                className="px-6 py-4 text-left font-semibold"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 600
                }}
              >
                {children}
              </th>
            ),
            tbody: ({ children }) => (
              <tbody style={{ backgroundColor: 'white' }}>
                {children}
              </tbody>
            ),
            td: ({ children }) => (
              <td 
                className="px-6 py-4"
                style={{ 
                  borderBottom: '1px solid var(--color-light-gray)',
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: '20px',
                  lineHeight: '1.8'
                }}
              >
                {children}
              </td>
            ),
            img: ({ src, alt }) => (
              <img 
                src={src}
                alt={alt}
                className="w-full rounded-lg my-8 shadow-md"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '2em auto'
                }}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
