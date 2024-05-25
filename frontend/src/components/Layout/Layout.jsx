import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

const Layout = ({ activeHeading,path,children }) => {
  const isAuthPath = path === '/login' || path === '/signup';
  return (
    <div className='bg-[#f5f2f2]'>
      {!isAuthPath && <Header activeHeading={activeHeading} />}
      {children}
      {!isAuthPath && <Footer />}
    </div>
  );
};

export default Layout;