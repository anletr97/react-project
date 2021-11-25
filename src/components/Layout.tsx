import { Navbar, Summary, Article, Outro, Footer } from 'components';
import React, { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Outro />
      <Footer />
    </div>
  );
};

export default Layout;
