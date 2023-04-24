import React from 'react';
import logo from './logo.svg';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';
import './index.css'
import { Link } from './Link';

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <Logo />
            <Link className='navitem' href='/'>
              Home
            </Link>
            <Link className='navitem' href='/about'>
              About
            </Link>
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex m-auto max-w-4xl'>
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-5 flex flex-col items-center'>
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen p-5 pb-12'>
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className='mt-5 mb-3'>
      <a href='/'>
        <img src={logo} height={64} width={64} alt='logo' />
      </a>
    </div>
  );
}
