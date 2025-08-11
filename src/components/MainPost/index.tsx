import clsx from 'clsx';
import Link from 'next/link';

import { PostType } from '@/Types/PostType';
import ImagePost from '../ImagePost';
import DescribePost from '../DescribePost';

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
      <DescribePost post={post} typeTile='h1' />
    </Link>
  ) : (
    <></>
  );
};

export default MainPost;
