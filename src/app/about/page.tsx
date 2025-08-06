import React from 'react';

const AboutPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return <div>AboutPage.</div>;
};

export default AboutPage;
