import React from 'react';

type DeleteType = {
  params: Promise<{ slug: string }>;
};

const Delete = async ({ params }: DeleteType) => {
  const { slug } = await params;

  return (
    <div>
      <p>Deletar post: {slug}</p>
    </div>
  );
};

export default Delete;
