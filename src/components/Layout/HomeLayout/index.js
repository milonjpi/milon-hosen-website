'use client';

import Footer from './Footer';
import Header from './Header';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
