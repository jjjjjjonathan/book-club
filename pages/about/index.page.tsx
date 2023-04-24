import React from 'react';
import './code.css';

export { Page };

function Page() {
  return (
    <>
      <h1>About</h1>
      <p className='text-red-500'>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  );
}
