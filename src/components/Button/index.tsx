'use client';

import React from 'react';

const Button = () => {
  console.log('✌️Button --->');
  return (
    <button
      onClick={() => {
        alert('123');
      }}
    >
      teste
    </button>
  );
};

export default Button;
