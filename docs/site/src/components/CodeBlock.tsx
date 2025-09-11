import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ children, language = 'typescript', title }: CodeBlockProps) {
  return (
    <div className="my-24">
      {title && (
        <div className="bg-brand text-black px-16 py-8 border-1 border-black border-b-0">
          <span className="text-sm font-sans font-medium">{title}</span>
        </div>
      )}
      <div className="border-1 border-black overflow-hidden">
        <SyntaxHighlighter
          language={language}
          customStyle={{
            margin: 0,
            padding: '16px',
            background: 'var(--mies-color-white)',
            border: 'none',
            borderRadius: 0,
            fontSize: 'var(--mies-font-size-sm)',
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
          }}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

interface InlineCodeProps {
  children: string;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="bg-white border-1 border-black px-8 py-4 text-sm font-mono">
      {children}
    </code>
  );
}