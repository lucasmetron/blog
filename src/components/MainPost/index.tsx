import clsx from 'clsx';

import { PostType } from '@/Types/PostType';
import { formatDate } from '@/utils/functions';
import Link from 'next/link';
import PostHeading from '../PostHeading';
import ImagePost from '../ImagePost';

interface MainPostType {
  post: PostType | undefined;
}

const MainPost = ({ post }: MainPostType) => {
  return post !== undefined ? (
    <Link
      href={`/post/${post.slug}`}
      className={clsx(
        'w-full min-h-[60vh] mt-[3rem] grid grid-rows-[1.3fr_1fr] gap-[1rem] group',
        'sm:grid-rows-[1fr] sm:grid-cols-[1fr_1fr] sm:min-h-[35vh] sm:gap-[1.5rem]',
        'lg:min-h-[40vh] lg:max-h-[400px]',
      )}
    >
      <ImagePost post={post} isPriority />
      <div className='flex flex-col items-start justify-center gap-[0.5rem]'>
        <p className='opacity-70'>{formatDate(post.createdAt)}</p>
        <PostHeading as='h1'> {post.title}</PostHeading>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  ) : (
    <></>
  );
};

export default MainPost;
