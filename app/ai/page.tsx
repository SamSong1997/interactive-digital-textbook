'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Message, quickQuestions, getAIMockResponse } from '@/lib/ai-mock-data';

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '您好！我是基于《新能源材料与装备》教材训练的AI助手。我可以帮您：\n\n- 总结章节核心知识点\n- 解释专业概念和原理\n- 比较不同技术方案\n- 回答学习中的疑问\n\n请问有什么可以帮助您的吗？',
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = getAIMockResponse(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="h-[calc(100vh-5rem)] bg-neutral-background">
      <div className="h-full p-6 flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <a
            href="https://xjtupress.wenkoo.com.cn/chat/agent"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-neutral-border hover:border-brand-primary"
          >
            <div className="p-5 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-deep rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-dark mb-1">新能源科普导师</h3>
              <p className="text-xs text-neutral-text">新能源科普专用通识语言模型</p>
            </div>
          </a>

          <a
            href="https://xjtupress.wenkoo.com.cn/chat/agent"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-neutral-border hover:border-brand-primary"
          >
            <div className="p-5 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-dark mb-1">新能源技术分析师</h3>
              <p className="text-xs text-neutral-text">新能源应用规划师，关键十年经验</p>
            </div>
          </a>

          <a
            href="https://xjtupress.wenkoo.com.cn/chat/agent"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-neutral-border hover:border-brand-primary"
          >
            <div className="p-5 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-dark mb-1">新能源应用规划师</h3>
              <p className="text-xs text-neutral-text">新能源应用规划师，关键十年经验</p>
            </div>
          </a>

          <a
            href="https://xjtupress.wenkoo.com.cn/chat/agent"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-neutral-border hover:border-brand-primary"
          >
            <div className="p-5 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-dark mb-1">全能备课</h3>
              <p className="text-xs text-neutral-text">按照《新能源材料与装备》的内容生成备课资源</p>
            </div>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-sm flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3xl px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-brand-primary text-white'
                      : 'bg-neutral-background text-neutral-dark'
                  }`}
                >
                  {message.role === 'user' ? (
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                  ) : (
                    <div className="markdown-content text-sm leading-relaxed">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ children }) => <h1 className="text-xl font-bold mt-4 mb-2 text-neutral-dark">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-lg font-bold mt-3 mb-2 text-neutral-dark">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-base font-semibold mt-2 mb-1 text-neutral-dark">{children}</h3>,
                          p: ({ children }) => <p className="my-2 text-neutral-dark">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside my-2 space-y-1 text-neutral-dark">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside my-2 space-y-1 text-neutral-dark">{children}</ol>,
                          li: ({ children }) => <li className="text-neutral-dark">{children}</li>,
                          strong: ({ children }) => <strong className="font-semibold text-neutral-dark">{children}</strong>,
                          em: ({ children }) => <em className="italic text-neutral-dark">{children}</em>,
                          code: ({ children }) => <code className="px-1 py-0.5 bg-gray-100 rounded text-xs font-mono text-brand-primary">{children}</code>,
                          pre: ({ children }) => <pre className="my-2 p-3 bg-gray-100 rounded overflow-x-auto">{children}</pre>,
                          blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-primary pl-3 my-2 text-neutral-text italic">{children}</blockquote>,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-background px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 border-t border-neutral-border bg-neutral-background/50">
            <div>
              <div className="mb-4">
                <p className="text-xs text-neutral-text mb-3 font-medium">快速提问：</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(q)}
                      className="px-4 py-2 text-sm bg-white border border-neutral-border text-neutral-dark rounded-lg hover:bg-brand-light hover:text-brand-primary hover:border-brand-primary transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="输入您的问题，按 Enter 发送..."
                  className="flex-1 px-5 py-3.5 border border-neutral-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm bg-white"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="px-7 py-3.5 bg-brand-primary text-white rounded-xl hover:bg-brand-deep disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span>发送</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
