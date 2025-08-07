import Image from 'next/image';
import clsx from 'clsx';

import { PostType } from '@/Types/PostType';
import { formatDate } from '@/utils/functions';
import Link from 'next/link';

interface MainPostType {
  post: PostType | undefined;
}

const MainPost = ({ post }: MainPostType) => {
  return post !== undefined ? (
    <Link
      href='/about'
      className={clsx(
        'w-full min-h-[60vh] mt-[3rem] grid grid-rows-[1.3fr_1fr] gap-[1rem] group',
        'sm:grid-rows-[1fr] sm:grid-cols-[1fr_1fr] sm:min-h-[35vh] sm:gap-[1.5rem]',
        'lg:min-h-[40vh]',
      )}
    >
      <div className='relative w-full h-full rounded-[12px] overflow-hidden '>
        <Image
          src={post.coverImageUrl}
          alt={post.slug}
          width={1200}
          height={700}
          className='object-cover object-center w-full h-full group-hover:scale-105 transition'
          priority
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-[0.5rem]'>
        <p className='opacity-70'>{formatDate(post.createdAt)}</p>
        <h2 className='font-bold text-3xl'>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  ) : (
    <></>
  );
};

export default MainPost;
