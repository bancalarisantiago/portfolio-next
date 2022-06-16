import Header from '../header';
import React, { ReactChildren, ReactChild } from 'react';

interface props {
  children: React.ReactNode;
  activeLink: string;
}

const Layout: React.FC<props> = ({ children, activeLink }) => {
  return (
    <div>
      <Header activeLink={activeLink} />
      {children}
    </div>
  );
};

export default Layout;
