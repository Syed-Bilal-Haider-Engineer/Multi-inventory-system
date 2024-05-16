import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

const Layout = ({ activeHeading,children }) => {
    console.log(activeHeading,"activeHeading==>")
  return (
    <div>
      <Header activeHeading={activeHeading} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;