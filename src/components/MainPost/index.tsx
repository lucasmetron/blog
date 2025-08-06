import Image from 'next/image';
import clsx from 'clsx';

import { PostType } from '@/Types/PostType';
import { formatDate } from '@/utils/functions';

interface MainPostType {
  post: PostType | undefined;
}

const MainPost = ({ post }: MainPostType) => {
  return post !== undefined ? (
    <div
      className={clsx(
        'relative',
        'w-[100%]',
        'h-[40vh]',
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
        <p>{formatDate(post.createdAt)}</p>
        <h2 className='font-bold text-3xl'>{post.title}</h2>
        <p className='opacity-90'>{post.excerpt}</p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MainPost;
