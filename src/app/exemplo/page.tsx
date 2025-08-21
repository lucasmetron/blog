import React from 'react';

export const dynamic = 'force-dynamic';

const exemplo = () => {
  const stamp = new Date().toISOString();
  return <div>{stamp}</div>;
};

export default exemplo;
