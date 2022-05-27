import React from 'react';
import { LayoutProps } from 'src/types/layout';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //make a responsive layout here
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout