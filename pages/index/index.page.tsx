import React from 'react';
import { Counter } from './Counter';

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <p className='text-5xl bg-blue-400'>HELLO WORLD</p>
    </>
  );
}
