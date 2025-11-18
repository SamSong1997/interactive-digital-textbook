'use client';

import { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface ResourceLink {
  title: string;
  description: string;
  url: string;
}

interface SidebarResourcesProps {
  quizQuestions: QuizQuestion[];
  resourceLinks: ResourceLink[];
}

export function SidebarResources({ quizQuestions, resourceLinks }: SidebarResourcesProps) {
  const [expandedQuiz, setExpandedQuiz] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex });
  };

  const handleCheckAnswer = (questionId: number) => {
    setShowResults({ ...showResults, [questionId]: true });
  };

  const toggleQuiz = (questionId: number) => {
    setExpandedQuiz(expandedQuiz === questionId ? null : questionId);
  };

  return (
    <div className="space-y-6">
      {/* 测试题目区域 */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-orange)' }}
          >
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <h3 
            className="text-lg font-semibold"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark)'
            }}
          >
            章节测试
          </h3>
        </div>

        <div className="space-y-3">
          {quizQuestions.map((quiz) => (
            <div 
              key={quiz.id}
              className="border rounded-lg overflow-hidden transition-all"
              style={{ borderColor: 'var(--color-light-gray)' }}
            >
              <button
                onClick={() => toggleQuiz(quiz.id)}
                className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-opacity-50 transition-colors"
                style={{ 
                  backgroundColor: expandedQuiz === quiz.id ? 'var(--color-light-gray)' : 'transparent',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <span className="text-sm font-medium text-left flex-1 leading-relaxed">
                  {quiz.id}. {quiz.question}
                </span>
                {expandedQuiz === quiz.id ? (
                  <ChevronUp className="w-4 h-4 flex-shrink-0 ml-3" style={{ color: 'var(--color-orange)' }} />
                ) : (
                  <ChevronDown className="w-4 h-4 flex-shrink-0 ml-3" style={{ color: 'var(--color-mid-gray)' }} />
                )}
              </button>

              {expandedQuiz === quiz.id && (
                <div className="px-4 pt-3 pb-4 space-y-3">
                  {quiz.options.map((option, index) => {
                    const isSelected = selectedAnswers[quiz.id] === index;
                    const isCorrect = index === quiz.correctAnswer;
                    const showResult = showResults[quiz.id];

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(quiz.id, index)}
                        disabled={showResult}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm transition-all leading-relaxed"
                        style={{
                          backgroundColor: showResult
                            ? isCorrect
                              ? 'var(--color-green)'
                              : isSelected
                              ? '#ffebee'
                              : 'transparent'
                            : isSelected
                            ? 'var(--color-light-gray)'
                            : 'transparent',
                          border: `1px solid ${
                            showResult && isCorrect
                              ? 'var(--color-green)'
                              : isSelected
                              ? 'var(--color-orange)'
                              : 'var(--color-light-gray)'
                          }`,
                          color: showResult && isCorrect ? 'white' : 'var(--color-dark)',
                          cursor: showResult ? 'default' : 'pointer',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {String.fromCharCode(65 + index)}. {option}
                      </button>
                    );
                  })}

                  {!showResults[quiz.id] && selectedAnswers[quiz.id] !== undefined && (
                    <button
                      onClick={() => handleCheckAnswer(quiz.id)}
                      className="w-full mt-4 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
                      style={{ 
                        backgroundColor: 'var(--color-orange)',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      检查答案
                    </button>
                  )}

                  {showResults[quiz.id] && (
                    <div 
                      className="mt-4 p-3.5 rounded-lg text-sm leading-relaxed"
                      style={{
                        backgroundColor: selectedAnswers[quiz.id] === quiz.correctAnswer
                          ? 'rgba(120, 140, 93, 0.1)'
                          : 'rgba(217, 119, 87, 0.1)',
                        color: 'var(--color-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {selectedAnswers[quiz.id] === quiz.correctAnswer
                        ? '✓ 回答正确！'
                        : `✗ 正确答案是 ${String.fromCharCode(65 + quiz.correctAnswer)}`}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 相关文库资源 */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-blue)' }}
          >
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h3 
            className="text-lg font-semibold"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark)'
            }}
          >
            相关文库
          </h3>
        </div>

        <div className="space-y-3">
          {resourceLinks.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border transition-all hover:shadow-md group"
              style={{ 
                borderColor: 'var(--color-light-gray)',
                fontFamily: 'var(--font-body)'
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h4 
                    className="text-sm font-semibold mb-2 group-hover:text-opacity-80 transition-colors leading-relaxed"
                    style={{ color: 'var(--color-dark)' }}
                  >
                    {resource.title}
                  </h4>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--color-mid-gray)' }}
                  >
                    {resource.description}
                  </p>
                </div>
                <ExternalLink 
                  className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                  style={{ color: 'var(--color-blue)' }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
