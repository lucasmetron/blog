import Image from 'next/image';
import clsx from 'clsx';

import { colors } from '@/styles/pallete';
import { PostType } from '@/Types/PostType';
import { formatDate } from '@/utils/functions';

interface MainPostType {
  post: PostType;
}

const MainPost = ({ post }: MainPostType) => {
  return (
    <div
      className={clsx(
        'relative',
        'w-[100%]',
        'h-[35vh]',
        'max-[800]:h-fit',
        'grid',
        'grid-cols-[0.7fr_1fr]',
        'max-[800]:grid-cols-[1fr]',
        'max-[800]:grid-rows-[2fr_1fr]',
        'gap-[1.5rem]',
        'mt-[2rem]',
        'cursor-pointer',
      )}
    >
      <div className='relative w-full h-full'>
        <Image
          src={post.coverImageUrl}
          alt={post.slug}
          fill
          className='object-fill rounded-[5px]'
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-[1rem]'>
        <p style={{ color: colors.label }}>{formatDate(post.createdAt)}</p>
        <h2 style={{ color: colors.textBold }} className='font-bold text-3xl'>
          {post.title}
        </h2>
        <p style={{ color: colors.textRegular }}>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default MainPost;
