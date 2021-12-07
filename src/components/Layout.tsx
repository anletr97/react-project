import { Navbar, Outro, Footer } from 'components';
import React, { ReactNode } from 'react';
import 'styles/header.css';

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
