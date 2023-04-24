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
      <p className='bg-emerald-400 text-5xl'>HELLO WORLD</p>
    </>
  );
}
