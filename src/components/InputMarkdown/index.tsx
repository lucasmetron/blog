'use client';

import dynamic from 'next/dynamic';
import { useId } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

type InputMarkdownProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textAreaName: string;
  labelText?: string;
  disabled?: boolean;
};

export default function InputMarkdown({
  value,
  setValue,
  textAreaName,
  labelText = '',
  disabled = false,
}: InputMarkdownProps) {
  const id = useId();

  return (
    <div className='w-full flex flex-col gap-2'>
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}

      <MDEditor
        className='
    !bg-white !text-black
    !border !border-gray-300 !shadow-none
    [&_.w-md-editor-content]:!border-t [&_.w-md-editor-content]:!border-slate-300
    [&_.w-md-editor-toolbar]:!border-b [&_.w-md-editor-toolbar]:!border-slate-300
  '
        value={value}
        onChange={value => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        extraCommands={[]}
        preview='edit'
        hideToolbar={disabled}
        textareaProps={{
          id,
          name: textAreaName,
          disabled: disabled,
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      />
    </div>
  );
}
