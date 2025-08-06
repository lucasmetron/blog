import Link from 'next/link';
import React from 'react';

const AboutPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <Link href={'/'}>
      <div>AboutPage.</div>
    </Link>
  );
};

export default AboutPage;
