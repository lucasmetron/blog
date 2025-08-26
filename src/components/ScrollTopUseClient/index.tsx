'use client';

import { usePathname } from 'next/navigation';
import React, { useLayoutEffect } from 'react';

const ScrollTopUseClient = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
};

export default ScrollTopUseClient;
