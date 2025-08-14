import clsx from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownType = {
  markdown: string;
};

const SafeMarkdown = ({ markdown }: SafeMarkdownType) => {
  return (
    <div
      className={clsx(
        'prose prose-slate dark:prose-invert', // <- muda no dark mode
        'w-full max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-blue-500 dark:prose-a:text-blue-400', // <- cor de link no dark
        'prose-a:hover:text-blue-700 dark:prose-a:hover:text-blue-300',
        'prose-a:hover:underline',
        'prose-img:mx-auto',
        'lg:prose-lg',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default SafeMarkdown;
