import React from 'react';

export const dynamic = 'force-dynamic';

type PostToEditProps = {
  params: Promise<{ id: string }>;
};

const PostToEditPage = async ({ params }: PostToEditProps) => {
  const { id } = await params;

  return (
    <div>
      <h1>PostToEditPage id:{id}</h1>
    </div>
  );
};

export default PostToEditPage;
